import { colors } from "@/src/theme/colors";
import { sizes } from "@/src/theme/sizes";
import { StyleSheet, Dimensions } from "react-native";
const { width: WindowWidth } = Dimensions.get("window");
const ListImageWidth = WindowWidth * 0.8;
const ItemInternalPadding = 10;
const ItemContainerWidth = ListImageWidth + ItemInternalPadding * 2;
export const ListPadding = (WindowWidth - ItemContainerWidth) / 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: sizes.logo,
    fontWeight: "bold",
    color: colors.primary,
    marginLeft: 10,
  },
  contentContainer: {
    paddingLeft: ListPadding,
    paddingRight: ListPadding,
    alignSelf: "flex-start",
    marginVertical: 20,
  },
  body: {
    paddingHorizontal: 20,
  },
  headingContainer: {
    marginTop: 10,
  },
  heading: {
    fontSize: 35,
    color: colors.text,
    lineHeight: 50,
  },
  highlightText: {
    fontSize: 38,
    fontWeight: "bold",
    color: colors.primary,
  },
  description: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 10,
    lineHeight: 22,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
