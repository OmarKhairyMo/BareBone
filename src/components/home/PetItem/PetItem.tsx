import { TPet } from '@/src/services/endpoints/model/model'
import { colors } from '@/src/theme/colors'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import { styles } from './styles'

const AnimatedButton = Animated.createAnimatedComponent(Pressable);

interface PetItemProps {
  item: TPet
  index: number
  onPress: () => void
}
export const PetItem = ({ item, index, onPress }: PetItemProps) => {
  return (
    <AnimatedButton
    entering={FadeIn.duration(500).delay(index * 300)}
    style={styles.petCard}
    onPress={onPress}
  >
    <View style={styles.petImageContainer}>
      {item.image_url ? (
        <Image
          source={{ uri: item.image_url }}
          style={styles.petImage}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.petImagePlaceholder}>
          <Ionicons name="paw" size={40} color={colors.white} />
        </View>
      )}
    </View>
    <Text style={styles.petName} numberOfLines={1}>
      {item.name}
    </Text>
  </AnimatedButton>

  )
}


