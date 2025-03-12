import { colors } from "@/src/theme/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  swipeButtonContainer: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  swipeTrack: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 30,
    overflow: "hidden",
  },
  swipeProgress: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: colors.primary,
    opacity: 0.3,
  },
  swipeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    width: "100%",
    textAlign: "center",
  },
  swipeIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
});
