import React, { ReactNode } from "react";
import {
	Keyboard,
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableWithoutFeedback,
} from "react-native";

interface Props {
	children?: ReactNode;
	// any props that come into the component
}
export default function KeyboardHideableView({ children, ...props }: Props) {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			{children}
		</TouchableWithoutFeedback>
	);
}
