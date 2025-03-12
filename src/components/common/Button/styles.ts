import { colors } from '@/src/theme/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "600",
    },
})