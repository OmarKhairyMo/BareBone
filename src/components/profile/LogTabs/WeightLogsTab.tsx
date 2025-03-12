import { ErrorFallback } from "@/src/components/common/ErrorFallback";
import { Loader } from "@/src/components/common/Loader";
import { useGetWeightLogs } from "@/src/services/endpoints/getWeightLogs";
import { TWeightLog } from "@/src/services/endpoints/model/model";
import { colors } from "@/src/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Button from "../../common/Button";
import { EmptyList } from "../../common/EmptyList";
import { LogsItem } from "../LogsItem";
import {
  LogBottomSheet,
  LogBottomSheetRef,
} from "../LogBottomSheet/LogBottomSheet";
import { useAddWeightLog } from "@/src/services/endpoints/addWeightLog";
export const WeightLogsTab = ({ petId }: { petId: string }) => {
  const bottomSheetRef = useRef<LogBottomSheetRef>(null);
  const {
    data: weightLogs,
    isLoading,
    error,
    refetch,
  } = useGetWeightLogs(petId);
  const { mutate: addWeightLog } = useAddWeightLog();
  const handleRefresh = () => {
    refetch();
  };

  const handleAddWeight = (value: string) => {
    addWeightLog({
      pet_id: petId,
      weight: parseFloat(value),
      date: new Date().toISOString(),
    });
  };

  const handleOpenBottomSheet = useCallback(() => {
    bottomSheetRef.current?.open();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorFallback errorText="Error loading weight logs" />;
  }

  return (
    <>
      <View style={styles.tabContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={weightLogs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: TWeightLog }) => (
            <LogsItem
              item={item}
              logValue={`${item.weight} kg`}
              iconName="scale-outline"
            />
          )}
          refreshing={isLoading}
          onRefresh={handleRefresh}
          ListEmptyComponent={
            <EmptyList
              emptyText="No weight logs found"
              containerStyle={{ height: 300 }}
              icon={
                <Ionicons
                  name="scale-outline"
                  size={48}
                  color={colors.textTertiary}
                />
              }
            />
          }
        />
        <Button title="Add New Weight Log" onPress={handleOpenBottomSheet} />
      </View>
      <LogBottomSheet
        ref={bottomSheetRef}
        title="Add New Weight Log"
        onSubmit={handleAddWeight}
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
