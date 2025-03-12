import { useScrollAnimation } from "@/src/hooks/animation/useOnBoardingAnimation";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";

const DOT_SIZE = 8;
const DOT_SPACING = 8;

interface PaginationDotsProps {
  data: string[];
  scrollX: SharedValue<number>;
  itemWidth: number;
}

export const PaginationDots = ({
  data,
  scrollX,
  itemWidth,
}: PaginationDotsProps) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => {
        const { animatedDotStyle } = useScrollAnimation(
          scrollX,
          index,
          itemWidth
        );
        return (
          <Animated.View
            key={`dot-${index}`}
            style={[
              {
                height: DOT_SIZE,
                borderRadius: DOT_SIZE / 2,
                marginHorizontal: DOT_SPACING / 2,
              },
              animatedDotStyle,
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
