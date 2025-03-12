import Button from "@/src/components/common/Button";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useInputFocus } from "../../../hooks/useInputFocus";
import { useLogin } from "../../../hooks/useLogin";
import { NavigationKeys } from "../../../navigation/NavigationKeys";
import { colors } from "../../../theme/colors";
import { styles } from "./styles";

export const Login = () => {
  const navigation = useNavigation();
  const { email, password, isLoading, setEmail, setPassword, handleLogin } =
    useLogin();
  const emailInput = useInputFocus();
  const passwordInput = useInputFocus();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Sign in to your Account</Text>
        <Text style={styles.subtitle}>Enter your email and password</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[
                styles.input,
                emailInput.isFocused && styles.inputFocused,
              ]}
              placeholder="Enter your email"
              placeholderTextColor={colors.textTertiary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              {...emailInput.focusProps}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={[
                styles.input,
                passwordInput.isFocused && styles.inputFocused,
              ]}
              placeholder="Enter your password"
              placeholderTextColor={colors.textTertiary}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              {...passwordInput.focusProps}
            />
          </View>

          <Button
            title={isLoading ? "Signing in..." : "Sign In"}
            onPress={handleLogin}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            disabled={isLoading}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(NavigationKeys.SignUp as never)
              }
            >
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
