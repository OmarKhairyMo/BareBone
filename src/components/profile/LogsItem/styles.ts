import { colors } from '@/src/theme/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    logItem: {
        backgroundColor: colors.white,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        overflow: "hidden",
        paddingLeft:10,
        
      },
      logContent: {
        flexDirection: "row",
        alignItems: "center",
      },
      logIconContainer: {
        width: 50,
        height: 50,
        borderRadius:100,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
      },
      logDetails: {
        flex: 1,
        padding: 12,
      },
      logValue: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.primary,
        marginBottom: 4,
      },
      logDate: {
        fontSize: 14,
        color: colors.textSecondary,
      },
    
})