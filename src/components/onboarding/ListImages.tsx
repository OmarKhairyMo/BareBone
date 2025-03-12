import { useScrollAnimation } from '@/src/hooks/animation/useOnBoardingAnimation';
import { View, type StyleProp, type ViewStyle } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

type ListImageProps = {
  uri: string;
  itemWidth: number;
  style?: StyleProp<ViewStyle>;
  scrollOffset: SharedValue<number>;
  index: number;
};


export const ListImage: React.FC<ListImageProps> = ({
  uri: imageUri,
  itemWidth,
  style,
  scrollOffset,
  index,
}) => {
  const { rImageStyle, rContainerStyle } = useScrollAnimation(scrollOffset, index, itemWidth);
  return (
    <View>
    <Animated.View
      style={[
        style,
        {
          overflow: 'hidden',
          borderRadius: 20,
        },
        rContainerStyle,
      ]}>
      <Animated.Image
        key={imageUri}
        source={{ uri: imageUri }}
        resizeMode={'contain'}
        style={[{ width: itemWidth, height:360}, rImageStyle]}
      />
    </Animated.View>
    </View>

  );
};