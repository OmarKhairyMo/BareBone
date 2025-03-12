import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useAuth } from "../context/AuthContext";
import { Loader } from "../components/common/Loader";

export const RootNavigation = () => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
