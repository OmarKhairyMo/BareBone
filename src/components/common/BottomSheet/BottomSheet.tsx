import type React from "react";
import { forwardRef, useCallback } from "react";
import { BottomSheetBackdrop, BottomSheetModal, type BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { colors } from "@/src/theme/colors";

type BottomSheetProps = {
	children?: React.ReactNode;
} & React.ComponentProps<typeof BottomSheetModal>;

export const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(
	({ children, enablePanDownToClose, ...rest }, ref) => {
		const renderBackdrop = useCallback(
			(backdropProps: BottomSheetBackdropProps) => (
				<BottomSheetBackdrop
					appearsOnIndex={0}
					disappearsOnIndex={-1}
					pressBehavior={enablePanDownToClose === false ? "none" : "close"}
					{...backdropProps}
				/>
			),
			[enablePanDownToClose],
		);

		return (
			<BottomSheetModal
				backgroundStyle={{
					backgroundColor: colors.white,
				}}
				handleIndicatorStyle={{
					backgroundColor: colors.primary,
				}}
				ref={ref}
				backdropComponent={renderBackdrop}
				enablePanDownToClose={enablePanDownToClose}
				{...rest}
			>
				{children}
			</BottomSheetModal>
		);
	},
);
