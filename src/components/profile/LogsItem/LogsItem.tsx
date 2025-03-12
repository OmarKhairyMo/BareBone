import { TBodyConditionLog, TVetVisitLog, TWeightLog } from '@/src/services/endpoints/model/model'
import { colors } from '@/src/theme/colors'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

interface LogsItemProps {
    item: TBodyConditionLog | TWeightLog | TVetVisitLog,
    iconName: keyof typeof Ionicons.glyphMap,
    logValue: string,
}
export const LogsItem = ({item ,logValue,iconName}: LogsItemProps) => {
  return (
    <View style={styles.logItem}>
    <View style={styles.logContent}>
      <View style={styles.logIconContainer}>
        <Ionicons name={iconName} size={24} color={colors.white} />
      </View>
      <View style={styles.logDetails}>
        <Text style={styles.logValue}>
          {logValue}
        </Text>
        <Text style={styles.logDate}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
      </View>
    </View>
  </View>
  )
}

