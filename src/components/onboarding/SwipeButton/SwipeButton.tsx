import { useSwipeAnimation } from "@/src/hooks/animation/useSwipeAnimation";
import { colors } from "@/src/theme/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { styles } from "./styles";

interface SwipeButtonProps {
  onComplete: () => void;
  iconName?: keyof typeof MaterialIcons.glyphMap;
  text?: string;
}

export const SwipeButton: React.FC<SwipeButtonProps> = ({
  onComplete,
  iconName = "pets",
  text = "Get Started",
}) => {
  const {
    swipeGesture,
    iconAnimatedStyle,
    trackAnimatedStyle,
    textAnimatedStyle,
  } = useSwipeAnimation(onComplete);

  return (
    <View style={[styles.swipeButtonContainer]}>
      <View style={styles.swipeTrack}>
        <Animated.View style={[styles.swipeProgress, trackAnimatedStyle]} />
      </View>
      <Animated.Text style={[styles.swipeButtonText, textAnimatedStyle]}>
        {text}
      </Animated.Text>
      <GestureDetector gesture={swipeGesture}>
        <Animated.View style={[styles.swipeIconContainer, iconAnimatedStyle]}>
          <MaterialIcons name={iconName} size={24} color={colors.white} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
};
