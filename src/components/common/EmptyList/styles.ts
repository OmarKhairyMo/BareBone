import { colors } from '@/src/theme/colors'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
const { height} = Dimensions.get("window");

export const styles = StyleSheet.create({
    emptyContainer: {
        height: height * 0.8,
        justifyContent: "center",
        alignItems: "center",
      },    
      emptyText: {
        fontSize: 18,
        color: colors.textTertiary,
        marginTop:10
      },
})