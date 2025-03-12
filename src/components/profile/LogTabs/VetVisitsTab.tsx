import { ErrorFallback } from "@/src/components/common/ErrorFallback";
import { Loader } from "@/src/components/common/Loader";
import { useAddVetVisitLog } from "@/src/services/endpoints/addVetVisitLog";
import { useGetVetVisitLogs } from "@/src/services/endpoints/getVetVisitLogs";
import { TVetVisitLog } from "@/src/services/endpoints/model/model";
import { colors } from "@/src/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Button from "../../common/Button";
import { EmptyList } from "../../common/EmptyList";
import {
  LogBottomSheet,
  LogBottomSheetRef,
} from "../LogBottomSheet/LogBottomSheet";
import { LogsItem } from "../LogsItem";
export const VetVisitsTab = ({ petId }: { petId: string }) => {
  const bottomSheetRef = useRef<LogBottomSheetRef>(null);
  const { mutate: addVetVisitLog } = useAddVetVisitLog();
  const {
    data: vetVisitLogs,
    isLoading,
    error,
    refetch,
  } = useGetVetVisitLogs(petId);

  const handleRefresh = () => {
    refetch();
  };

  const handleAddVetVisit = (value: string) => {
    if (value) {
      addVetVisitLog({
        pet_id: petId,
        notes: value,
        date: new Date().toISOString(),
      });
      bottomSheetRef.current?.close();
    }
  };

  const handleOpenBottomSheet = useCallback(() => {
    bottomSheetRef.current?.open();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorFallback errorText="Error loading vet visit logs" />;
  }

  return (
    <>
      <View style={styles.tabContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={vetVisitLogs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: TVetVisitLog }) => (
            <LogsItem
              item={item}
              logValue={item.notes || "No notes"}
              iconName="medkit-outline"
            />
          )}
          refreshing={isLoading}
          onRefresh={handleRefresh}
          ListEmptyComponent={
            <EmptyList
              containerStyle={{ height: 300 }}
              emptyText="No vet visit logs found"
              icon={
                <Ionicons
                  name="medkit-outline"
                  size={48}
                  color={colors.textTertiary}
                />
              }
            />
          }
        />
        <Button title="Add New Vet Visit" onPress={handleOpenBottomSheet} />
      </View>
      <LogBottomSheet
        ref={bottomSheetRef}
        title="Add New Vet Visit"
        onSubmit={handleAddVetVisit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    padding: 16,
  },
});
