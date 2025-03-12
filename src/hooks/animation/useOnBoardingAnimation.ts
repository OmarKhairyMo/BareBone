const DOT_SIZE = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + 18;

import { colors } from "@/src/theme/colors";
import { Dimensions } from "react-native";
import {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width: ScreenWidth } = Dimensions.get("window");

export const useScrollAnimation = (
  scrollX: SharedValue<number>,
  index: number,
  itemWidth: number
) => {
  const inputRange = [
    itemWidth * (index - 1),
    itemWidth * index,
    itemWidth * (index + 1),
  ];

  const animatedDotStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * itemWidth,
      index * itemWidth,
      (index + 1) * itemWidth,
    ];
    const width = interpolate(
      scrollX.value,
      inputRange,
      [DOT_SIZE, DOT_INDICATOR_SIZE, DOT_SIZE],
      Extrapolation.CLAMP
    );
    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    );

    return {
      width,
      opacity,
      backgroundColor: colors.primary,
    };
  });
  const rImageStyle = useAnimatedStyle(() => {
    const outputRange = [-ScreenWidth / 2, 0, ScreenWidth / 2];
    const translateX = interpolate(scrollX.value, inputRange, outputRange);

    return {
      transform: [
        {
          scale: 1.7,
        },
        {
          translateX: translateX,
        },
      ],
    };
  }, []);

  const rContainerStyle = useAnimatedStyle(() => {
    const outputRange = [1, 1.05, 1];
    const scale = interpolate(scrollX.value, inputRange, outputRange);

    return {
      transform: [
        {
          scale,
        },
      ],
    };
  }, []);

  return {
    animatedDotStyle,
    rImageStyle,
    rContainerStyle,
  };
};
