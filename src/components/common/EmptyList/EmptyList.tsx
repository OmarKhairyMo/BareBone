import React from 'react'
import { Text, View } from 'react-native'
import { StyleProp, ViewStyle } from 'react-native'
import { styles } from './styles'
interface EmptyListProps {
    emptyText: string
    icon:React.ReactNode,
    containerStyle?:StyleProp<ViewStyle>
}
export const EmptyList = ({ emptyText ,icon,containerStyle}: EmptyListProps) => {
  return (
    <View style={[styles.emptyContainer,containerStyle]}>
    {icon}
    <Text style={styles.emptyText}>{emptyText}</Text>
  </View>
  )
}


