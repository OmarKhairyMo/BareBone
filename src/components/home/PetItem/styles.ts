import { colors } from '@/src/theme/colors'
import { Dimensions, StyleSheet } from 'react-native'
const { width } = Dimensions.get("window");
const cardWidth = (width - 48) / 2; 

export const styles = StyleSheet.create({
    petCard: {
        width: cardWidth,
        backgroundColor: colors.white,
        borderRadius: 12,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.08)",
      },
      petImageContainer: {
        width: "100%",
        height: cardWidth,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        overflow: "hidden",
      },
      petImage: {
        width: "100%",
        height: "100%",
      },
      petImagePlaceholder: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
      },
      petName: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.primary,
        padding: 12,
        textAlign: "center",
      },
})