import { ErrorFallback } from "@/src/components/common/ErrorFallback";
import { Loader } from "@/src/components/common/Loader";
import {
  BodyConditionTab,
  PetCard,
  VetVisitsTab,
  WeightLogsTab,
} from "@/src/components/profile";
import { useGetPetById } from "@/src/services/endpoints/getPetById";
import { colors } from "@/src/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet
} from "react-native";
import { MainStackParamList } from "../../navigation/MainStack";

type Props = NativeStackScreenProps<MainStackParamList, "SingleProfile">;
type TabParamList = {
  WeightLogs: { petId: string };
  BodyCondition: { petId: string };
  VetVisits: { petId: string };
};

const Tab = createMaterialTopTabNavigator<TabParamList>();

export const PetProfileScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params;

  const { data: pet, isLoading, error ,refetch } = useGetPetById(id);

  if (isLoading) {
    return (
      <Loader/>
    );
  }

  if (error || !pet) {
    return (
    <ErrorFallback onRetry={refetch} errorText="Error loading pet profile" />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
  
      <PetCard pet={pet} />

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarStyle: {
            backgroundColor: colors.white,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.primary,
            height: 3,
          },
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 12,
          },
        }}
      >
        <Tab.Screen
          name="WeightLogs"
          options={{
            title: "Weight",
            tabBarIcon: ({ color ,focused}) => (
              <Ionicons name={focused ? "scale-sharp" : "scale-outline"} size={20} color={color} />
            ),
          }}
        >
          {() => <WeightLogsTab petId={id} />}
        </Tab.Screen>
        <Tab.Screen
          name="BodyCondition"
          options={{
            title: "Body",
            tabBarIcon: ({ color ,focused}) => (
              <Ionicons name={focused ? "body-sharp" : "body-outline"} size={20} color={color} />
            ),
          }}
        >
          {() => <BodyConditionTab petId={id} />}
        </Tab.Screen>
        <Tab.Screen
          name="VetVisits"
          options={{
            title: "Vet Visits",
            tabBarIcon: ({ color ,focused}) => (
              <Ionicons name={focused ? "medkit-sharp" : "medkit-outline"} size={20} color={color} />
            ),
          }}
        >
          {() => <VetVisitsTab petId={id} />}
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
