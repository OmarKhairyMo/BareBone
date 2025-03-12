import Toast, { type ToastConfig, type ToastShowParams } from "react-native-toast-message";
import { Toaster } from "../components/common/Toaster/Toaster";

export const toastConfig: ToastConfig = {
	success: (props) => <Toaster title={props.text1} message={props.text2} variant="success" />,
	error: (props) => <Toaster title={props.text1} message={props.text2} variant="error" />,
};

export type ToasterProps = {
	title: string;
	message?: string;
	options?: Omit<ToastShowParams, "text1" | "text2">;
};
export const toaster = {
	unexpectedError: () => {
		Toast.show({
			type: "error",
			text1: "Unexpected Error",
			text2: "An unexpected error occurred. Please try again later.",
		});
	},
	success: (props: ToasterProps) => {
		Toast.show({
			type: "success",
			text1: props.title,
			text2: props.message,
			...props.options,
		});
	},

	error: (props: ToasterProps) => {
		Toast.show({
			type: "error",
			text1: props.title,
			text2: props.message,
			...props.options,
		});
	},

};
