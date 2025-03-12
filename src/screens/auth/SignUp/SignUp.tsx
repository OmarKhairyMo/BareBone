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
  View,
} from "react-native";
import { useInputFocus } from "../../../hooks/useInputFocus";
import { useSignUp } from "../../../hooks/useSignUp";
import { NavigationKeys } from "../../../navigation/NavigationKeys";
import { colors } from "../../../theme/colors";
import { styles } from "./styles";

export const SignUp = () => {
  const navigation = useNavigation();
  const {
    email,
    password,
    confirmPassword,
    isLoading,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSignUp,
  } = useSignUp();

  const emailInput = useInputFocus();
  const passwordInput = useInputFocus();
  const confirmPasswordInput = useInputFocus();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
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

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={[
                styles.input,
                confirmPasswordInput.isFocused && styles.inputFocused,
              ]}
              placeholder="Confirm your password"
              placeholderTextColor={colors.textTertiary}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              {...confirmPasswordInput.focusProps}
            />
          </View>

          <Button
            title={isLoading ? "Signing Up..." : "Sign Up"}
            onPress={handleSignUp}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            disabled={isLoading}
          />

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(NavigationKeys.Login as never)}
            >
              <Text style={styles.loginLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
