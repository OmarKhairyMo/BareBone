import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import { colors } from '@/src/theme/colors'
import { styles } from './styles'

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  )
}
