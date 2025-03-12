import { Loader } from "@/src/components/common/Loader";
import { MainStackParamList } from "@/src/navigation/MainStack";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, SafeAreaView, StatusBar } from "react-native";
import { useGetAllPets } from "../../services/endpoints";
import { TPet } from "../../services/endpoints/model/model";
import { colors } from "../../theme/colors";
import { styles } from "./styles";
import { ErrorFallback } from "@/src/components/common/ErrorFallback";
import { EmptyList } from "@/src/components/common/EmptyList";
import { PetItem } from "@/src/components/home/PetItem";

type Props = NativeStackScreenProps<MainStackParamList, "Home">;
export const Home: React.FC<Props> = ({ navigation }) => {
  const { data: pets, isLoading, error, refetch } = useGetAllPets();
  const renderPetItem = ({ item, index }: { item: TPet; index: number }) => (
    <PetItem
      item={item}
      index={index}
      onPress={() => navigation.navigate("SingleProfile", { id: item.id })}
    />
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorFallback onRetry={refetch} errorText="Error loading pets" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <FlatList
        data={pets}
        renderItem={renderPetItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ListEmptyComponent={
          <EmptyList
            emptyText="No pets found"
            icon={
              <Ionicons
                name="paw-outline"
                size={64}
                color={colors.textTertiary}
              />
            }
          />
        }
      />
    </SafeAreaView>
  );
};
