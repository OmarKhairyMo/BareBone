import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  type BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/src/theme/colors";

type BottomSheetProps = {
  children?: React.ReactNode;
} & React.ComponentProps<typeof BottomSheetModal>;

export const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(
  ({ children, enablePanDownToClose = true, ...rest }, ref) => {
    const insets = useSafeAreaInsets();
    const bottomSheetRef = useRef<BottomSheetModal>(null);

    useImperativeHandle(ref, () => bottomSheetRef.current!, []);

    const renderBackdrop = useCallback(
      (backdropProps: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          pressBehavior={enablePanDownToClose === false ? "none" : "close"}
          {...backdropProps}
        />
      ),
      [enablePanDownToClose]
    );

    return (
      <BottomSheetModal
        backgroundStyle={{
          backgroundColor: colors.white,
        }}
        handleIndicatorStyle={{
          backgroundColor: colors.gray,
          width: 40,
          height: 4,
        }}
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop}
        topInset={insets.top}
        enablePanDownToClose={enablePanDownToClose}
        {...rest}
      >
        {children}
      </BottomSheetModal>
    );
  }
);
