import { ErrorFallback } from "@/src/components/common/ErrorFallback";
import { Loader } from "@/src/components/common/Loader";
import { useAddBodyConditionLog } from "@/src/services/endpoints";
import { useGetBodyConditionLogs } from "@/src/services/endpoints/getBodyConditionLogs";
import { TBodyConditionLog } from "@/src/services/endpoints/model/model";
import { colors } from "@/src/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Button from "../../common/Button";
import { EmptyList } from "../../common/EmptyList";
import {
  LogBottomSheet,
  LogBottomSheetRef,
} from "../LogBottomSheet/LogBottomSheet";
import { LogsItem } from "../LogsItem";

export const BodyConditionTab = ({ petId }: { petId: string }) => {
  const {
    data: bodyConditionLogs,
    isLoading,
    error,
    refetch,
  } = useGetBodyConditionLogs(petId);
  const bottomSheetRef = useRef<LogBottomSheetRef>(null);

  const { mutate: addBodyConditionLog } = useAddBodyConditionLog();
  if (isLoading) {
    return <Loader />;
  }
  const handleRefresh = () => {
    refetch();
  };
  const handleAddBodyCondition = (value: string) => {
    addBodyConditionLog({
      pet_id: petId,
      body_condition: value,
      date: new Date().toISOString(),
    });
  };
  if (error) {
    return <ErrorFallback errorText="Error loading body condition logs" />;
  }



  return (
    <>
      <View style={styles.tabContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={bodyConditionLogs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: TBodyConditionLog }) => (
            <LogsItem
              item={item}
              logValue={item.body_condition}
              iconName="body-outline"
            />
          )}
          refreshing={isLoading}
          onRefresh={handleRefresh}
          ListEmptyComponent={
            <EmptyList
              emptyText="No body condition logs found"
              containerStyle={{ height: 300 }}
              icon={
                <Ionicons
                  name="body-outline"
                  size={48}
                  color={colors.textTertiary}
                />
              }
            />
          }
        />
        <Button
          title="Add New Body Condition"
          onPress={()=>{
            bottomSheetRef?.current?.open();
          }}
        />
      </View>
      <LogBottomSheet
        ref={bottomSheetRef}
        title="Add New Body Condition"
        onSubmit={handleAddBodyCondition}
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
