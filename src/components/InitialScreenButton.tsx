import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function InitialScreenButton(props: any) {
	const { onPress, title } = props;
	return (
		<Pressable style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 15,
		borderRadius: 100,
		elevation: 3,
		marginTop: 10,
		marginBottom: 10,
		marginHorizontal: 60,
		backgroundColor: "white",
		borderColor: "white",
		borderWidth: 2,
		shadowColor: "black",
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
	text: {
		fontSize: 22,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "#2066d3",
	},
});
