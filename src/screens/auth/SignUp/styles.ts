import { colors } from "@/src/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    titleContainer: {
      backgroundColor: colors.primary,
      height: 280,
      paddingLeft: 24,
      justifyContent: "flex-end",
    },
    scrollContainer: {
      flexGrow: 1,
    },
    formContainer: {
      paddingHorizontal: 24,
      paddingVertical: 40,
    },
    title: {
      fontSize: 40,
      fontWeight: "bold",
      color: colors.white,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: colors.textTertiary,
      marginBottom: 32,
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 14,
      fontWeight: "500",
      color: colors.text,
      marginBottom: 8,
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderColor: colors.textQuaternary,
      borderRadius: 8,
      paddingHorizontal: 16,
      fontSize: 16,
      color: colors.text,
      backgroundColor: colors.white,
    },
    inputFocused: {
      borderColor: colors.primary,
    },
    button: {
      height: 50,
      backgroundColor: colors.primary,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 24,
    },
    buttonText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: "600",
    },
    loginContainer: {
      flexDirection: "row",
      justifyContent: "center",
    },
    loginText: {
      color: colors.textSecondary,
      fontSize: 14,
    },
    loginLink: {
      color: colors.primary,
      fontSize: 14,
      fontWeight: "600",
    },
  });
  