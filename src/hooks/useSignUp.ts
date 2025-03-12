import { useState } from "react";
import { Alert } from "react-native";
import { toaster } from "@/src/utils/toast";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { NavigationKeys } from "../navigation/NavigationKeys";
import { EMAIL_VALIDATION_REGEX } from "../constants";

interface UseSignUpReturn {
  email: string;
  password: string;
  confirmPassword: string;
  isLoading: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  handleSignUp: () => Promise<void>;
}


export const useSignUp = (): UseSignUpReturn => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const { signUp } = useAuth();

  const validateInputs = (): boolean => {
    if (!email || !password || !confirmPassword) {
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

    if (password.length < 6) {
      toaster.error({
        title: "Error",
        message: "Password must be at least 6 characters",
      });
      return false;
    }

    if (password !== confirmPassword) {
      toaster.error({
        title: "Error",
        message: "Passwords do not match",
      });
      return false;
    }

    return true;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) return;

    setIsLoading(true);

    try {
      const { error } = await signUp(email, password);

      if (error) {
        toaster.error({
          title: "Error",
          message: error.message,
        });
        return;
      }
      Alert.alert(
        "Success",
        "Registration successful! Please check your email to confirm your account.",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate(NavigationKeys.Login as never),
          },
        ]
      );
    } catch (error) {
      toaster.error({
        title: "Error",
        message: "Registration failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    confirmPassword,
    isLoading,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSignUp,
  };
};
