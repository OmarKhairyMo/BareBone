import { runOnJS, useDerivedValue, useSharedValue } from "react-native-reanimated";
import { colors } from "@/src/theme/colors";
import { useAnimatedStyle } from "react-native-reanimated";
import { withTiming } from "react-native-reanimated";
import { Gesture } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

const { width: WindowWidth } = Dimensions.get("window");

export const useSwipeAnimation = (onComplete: () => void) => {

    const swipeX = useSharedValue(0);
    const buttonWidth = useSharedValue(WindowWidth - 40);
    const buttonOpacity = useSharedValue(1);
    const titleColor = useSharedValue(colors.primary);
    const swipeGesture = Gesture.Pan()
      .onUpdate((event) => {
        if (event.translationX >= 0) {
          const maxSwipe = buttonWidth.value - 80;
          swipeX.value = Math.min(event.translationX, maxSwipe);
        }
        const maxSwipe = buttonWidth.value - 80;
        const progress = Math.min(swipeX.value / maxSwipe, 1);
        buttonOpacity.value = 1 - progress * 0.3;
      })
      .onEnd((event) => {
        const maxSwipe = buttonWidth.value - 80;
        if (swipeX.value > maxSwipe * 0.7) {
          buttonOpacity.value = withTiming(0, { duration: 300 });
          runOnJS(onComplete)();
        } else {
          swipeX.value = withTiming(0);
          buttonOpacity.value = withTiming(1);
        }
      });
  
    const iconAnimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: swipeX.value }],
      };
    });
  
    const trackAnimatedStyle = useAnimatedStyle(() => {
      const maxSwipe = buttonWidth.value - 80;
      const progress = Math.min(swipeX.value / maxSwipe, 1);
      return {
        width: `${progress * 100}%`,
        opacity: progress,
      };
    });
    const textAnimatedStyle = useAnimatedStyle(() => {
      return {
        color: withTiming(titleColor.value,{duration:300}),
      };
    });
    useDerivedValue(() => {
      titleColor.value = swipeX.value > 150 ? colors.white : colors.primary;
    }, [swipeX.value]);

return {
    swipeGesture,
    iconAnimatedStyle,
    trackAnimatedStyle,
    textAnimatedStyle,
}
    
}