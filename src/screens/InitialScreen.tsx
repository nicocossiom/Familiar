import { View, StyleSheet, Image, Text, Platform, Alert } from "react-native";
import InitialScreenButton from "../components/InitialScreenButton";
import { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";
import React, { useState } from "react";
import Dialog from "react-native-dialog";
import { TextInput } from "react-native-gesture-handler";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "LoginScreen">;

type Props = { navigation: LoginScreenNavigationProp };

export default function InitialScreen({ navigation }: Props) {
	const [visible, setVisible] = useState(false);
	const showDialog = () => {
		Platform.OS === "web" ? setVisible(false) : setVisible(true);
	};
	const handleCancel = () => {
		setVisible(false);
	};
	const handleEmailSubmit = () => {
		setVisible(false);
		Alert.alert("Email sent! Check your inbox and follow the instructions provided");
	};
	return (
		<View style={styles.container}>
			<Text style={styles.fhlogotext}>Familiar</Text>
			<Image style={styles.fhimage} source={require("../../assets/images/familia.png")} />
			<InitialScreenButton
				title="Login"
				onPress={() => navigation.navigate("LoginScreen")}
			/>
			<InitialScreenButton
				title="Register"
				onPress={() => navigation.navigate("RegisterScreen")}
			/>
			<Text
				style={{
					alignSelf: "center",
					color: "white",
					marginTop: 10,
				}}
			>
				Forgotten your credentials?
			</Text>
			<InitialScreenButton title=" Click here" onPress={() => Alert.prompt("Email")} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#2066d3",
	},
	fhlogotext: {
		alignSelf: "center",
		fontSize: 50,
		fontWeight: "bold",
		color: "white",
		marginTop: 100,
		shadowColor: "black",
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
	fhimage: {
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 50,
		// shadowColor: "black",
		// shadowOpacity: 0.1,
		// shadowRadius: 10,
	},
});
