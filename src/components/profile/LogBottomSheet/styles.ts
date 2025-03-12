import { colors } from "@/src/theme/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      padding: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 16,
    },
    input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    },
    multilineInput: {
      height: 120,
      textAlignVertical: "top",
    },
  buttonDisabled: {
    backgroundColor: colors.gray,
  },
});
