import { colors } from '@/src/theme/colors'
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
      },
      listContainer: {
        padding: 16,
        paddingBottom: 32,
      },
      columnWrapper: {
        justifyContent: "space-between",
        marginBottom: 16,
      },
      emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      emptyText: {
        fontSize: 20,
        color: colors.textTertiary,
      },
      errorText: {
        fontSize: 20,
        color: colors.red,
        marginBottom: 10,
      },
      retryButton: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5,
        width:100,
        justifyContent:"center",
        alignItems:"center"
      },
      retryButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold",
      },
})