import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { AuthProvider } from "./src/context/AuthContext";
import { ReactQueryProvider } from "./src/context/ReactQueryContext";
import { RootNavigation } from "./src/navigation/RootNavigation";
import { toastConfig } from "./src/utils/toast";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {

  return (
    <>
      <ReactQueryProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <AuthProvider>
              <RootNavigation />
            </AuthProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ReactQueryProvider>
      <Toast config={toastConfig} />
    </>
  );
}
