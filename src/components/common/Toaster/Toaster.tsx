import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/src/theme/colors";

export type UIToastVariants = {
  variant?: "success" | "error" 
};

export type UIToastProps = {
  title?: string;
  message?: string;
} & UIToastVariants;

const getUIToastIcon = (variant: UIToastVariants["variant"]) => {
  switch (variant) {
    case "success":
      return <Ionicons name="checkmark" size={20} color="#ffffff" />;
    case "error":
      return <Ionicons name="alert" size={20} color="#ffffff" />;
    default:
      return <Ionicons name="checkmark" size={20} color="#ffffff" />;
  }
};

export const Toaster = ({
  title,
  message,
  variant = "success",
}: UIToastProps) => {
  const rootStyle = [styles.root, styles[variant]];
  const iconRootStyle = [styles.iconRoot, styles[`${variant}Icon`]];
  return (
    <View style={rootStyle}>
      <View style={iconRootStyle}>{getUIToastIcon(variant)}</View>
      <View style={styles.infoRoot}>
        {title && <Text style={styles.title}>{title}</Text>}
        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 12,
    borderRadius: 8,
    margin: 16,
    gap: 12,
    flexDirection: "row",
    width: "90%",
    flex: 1,
    alignItems: "center",
  },
  success: {
    backgroundColor: colors.success,
    borderColor: colors.primary,
  },
  error: {
    backgroundColor: colors.error,
    borderColor: colors.error,
  },
  iconRoot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  successIcon: {
    backgroundColor: colors.success,
  },
  errorIcon: {
    backgroundColor: colors.red,
  },
  infoRoot: {
    gap: 4,
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.white,
  },
});
