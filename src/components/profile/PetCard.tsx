import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TPet } from "@/src/services/endpoints/model/model";
import { colors } from "@/src/theme/colors";

export const PetCard = ({ pet }: { pet: TPet }) => (
  <View style={styles.card}>
    <View style={styles.petImageContainer}>
      {pet.image_url ? (
        <Image
          source={{ uri: pet.image_url }}
          style={styles.petImage}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.petImagePlaceholder}>
          <Ionicons name="paw" size={40} color={colors.white} />
        </View>
      )}
    </View>
    <View style={styles.petDetails}>
      <Text style={styles.name}>{pet.name}</Text>
      <View style={styles.infoRow}>
        <Ionicons
          name="paw-outline"
          size={16}
          color={colors.primary}
          style={styles.infoIcon}
        />
        <Text style={styles.infoText}>{pet.species}</Text>
      </View>
      <View style={styles.infoRow}>
        <Ionicons
          name="information-circle-outline"
          size={16}
          color={colors.primary}
          style={styles.infoIcon}
        />
        <Text style={styles.infoText}>Breed: {pet.breed || "Unknown"}</Text>
      </View>
      <View style={styles.infoRow}>
        <Ionicons
          name="calendar-outline"
          size={16}
          color={colors.primary}
          style={styles.infoIcon}
        />
        <Text style={styles.infoText}>{pet.age} years old</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
  },
  petImageContainer: {
    marginRight: 16,
  },
  petImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  petDetails: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  infoIcon: {
    marginRight: 8,
  },
  infoText: {
    fontSize: 15,
    color: colors.textSecondary,
  },
  petImage: {
    width: 120,
    height: 120,
    borderRadius: 120,
  },
});
