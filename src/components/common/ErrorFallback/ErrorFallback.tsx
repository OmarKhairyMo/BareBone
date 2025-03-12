import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'

interface ErrorFallbackProps {
    onRetry?: () => void,
    errorText: string
}
export const ErrorFallback = ({ onRetry  ,errorText}: ErrorFallbackProps) => {
  return (
    <View style={styles.centered}>
    <Text style={styles.errorText}> {errorText}</Text>
    {onRetry && <Pressable onPress={onRetry} style={styles.retryButton}>
      <Text style={styles.retryButtonText}>Retry</Text>
    </Pressable>}
  </View>
  )
}


