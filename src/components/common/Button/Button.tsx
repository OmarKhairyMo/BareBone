import React from 'react'
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from 'react-native'
import { styles } from './styles'
export const Button = ({title, onPress ,buttonStyle ,textStyle, disabled}: {title: string, onPress: () => void, buttonStyle?: StyleProp<ViewStyle>, textStyle?: StyleProp<TextStyle>, disabled?: boolean}) => {
  return (
    <Pressable style={[styles.container, buttonStyle]} onPress={onPress} disabled={disabled}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  )
}


