import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Login } from "../screens/auth/Login/Login";
import { SignUp } from "../screens/auth/SignUp";
import { OnBoarding } from "../screens/onBoarding/OnBoarding";
import { NavigationKeys } from "./NavigationKeys";

export type AuthStackParamList = {
  OnBoarding: undefined;
  Login: undefined;
  SignUp: undefined;
};
const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={NavigationKeys.OnBoarding}
    >
      <Stack.Screen name={NavigationKeys.OnBoarding} component={OnBoarding} />
      <Stack.Screen name={NavigationKeys.Login} component={Login} />
      <Stack.Screen name={NavigationKeys.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
