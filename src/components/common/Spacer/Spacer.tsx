import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";

interface SpacerProps {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

export const Spacer = ({
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
}: SpacerProps) => {
  const spacerStyle: ViewStyle = {
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ml,
    marginRight: mr,
  };

  return <View style={spacerStyle} />;
};

