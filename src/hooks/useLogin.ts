import { toaster } from "@/src/utils/toast";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { EMAIL_VALIDATION_REGEX } from "../constants";

interface UseLoginReturn {
  email: string;
  password: string;
  isLoading: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => Promise<void>;
}

export const useLogin = (): UseLoginReturn => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();

  const validateInputs = (): boolean => {
    if (!email || !password) {
      toaster.error({
        title: "Error",
        message: "Please fill in all fields",
      });
      return false;
    }

    if (!EMAIL_VALIDATION_REGEX.test(email)) {
      toaster.error({
        title: "Error",
        message: "Please enter a valid email address",
      });
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    if (!validateInputs()) return;
    setIsLoading(true);
    try {
      const { error } = await signIn(email, password);
      if (error) {
        toaster.error({
          title: "Error",
          message: error.message,
        });
        return;
      }
    } catch (error) {
      toaster.error({
        title: "Error",
        message: "Login failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    isLoading,
    setEmail,
    setPassword,
    handleLogin,
  };
};
