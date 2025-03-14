import {
  BottomSheetModal,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheet } from "../../common/BottomSheet/BottomSheet";
import Button from "../../common/Button";
import { styles } from "./styles";
type LogBottomSheetProps = {
  title: string;
  onSubmit: (value: string) => void;
  placeholder?: string;
  multiline?: boolean;
};
export type LogBottomSheetRef = {
  open: () => void;
  close: () => void;
};

export const LogBottomSheet = React.forwardRef<
  LogBottomSheetRef,
  LogBottomSheetProps
>(
  (
    { title, onSubmit, placeholder = "Enter details...", multiline = false },
    ref
  ) => {
    const snapPoints = useMemo(() => ["25%", "50%"], []);
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const [value, setValue] = useState("");
    const insets = useSafeAreaInsets();

    const handleSubmit = useCallback(() => {
      if (value.trim()) {
        onSubmit(value);
        setValue("");
        bottomSheetRef.current?.dismiss();
      }
    }, [value, onSubmit]);

    useImperativeHandle(ref, () => ({
      open: () => {
        if (bottomSheetRef.current) bottomSheetRef.current.present();
      },
      close: () => {
        if (bottomSheetRef.current) bottomSheetRef.current.dismiss();
      },
    }));

    return (
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
      >
        <BottomSheetView
          style={[styles.contentContainer, { paddingBottom: insets.bottom }]}
        >
          <Text style={styles.title}>{title}</Text>
          <BottomSheetTextInput
            style={[styles.input, multiline && styles.multilineInput]}
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            autoFocus
            keyboardType="numeric"
          />
          <Button
            disabled={!value.trim()}
            buttonStyle={!value.trim() && styles.buttonDisabled}
            title="Submit"
            onPress={handleSubmit}
          />
        </BottomSheetView>
      </BottomSheet>
    );
  }
);
