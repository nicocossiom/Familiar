import {
	View,
	StyleSheet,
	Image,
	Text,
	Platform,
	Alert,
	Modal,
	Pressable,
	TextInput,
} from "react-native";
import InitialScreenButton from "../components/InitialScreenButton";
import { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";
import React, { useState } from "react";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "LoginScreen">;

type Props = { navigation: LoginScreenNavigationProp };

export default function InitialScreen({ navigation }: Props) {
	const [modalVisible, setModalVisible] = useState(false);
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
			<InitialScreenButton
				title=" Click here"
				onPress={() => setModalVisible(!modalVisible)}
			/>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>
							Hi! Please input your email below, you will recievea a link to update your
							password
						</Text>
						<TextInput
							style={styles.inputInfoBox}
							autoCorrect={false}
							autoCapitalize="none"
							placeholder="Email"
							placeholderTextColor={"#CDBBBB"}
						/>
						<View style={styles.buttonContainer}>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textStyle}>Close dialog</Text>
							</Pressable>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textStyle}>Send email</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
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
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		marginLeft: 10,
		marginRight: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2066d3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
		fontSize: 15,
	},
	inputInfoBox: {
		width: 250,
		height: 44,
		padding: 10,
		borderWidth: 2.5,
		borderColor: "#2066d3",
		marginBottom: 10,
		color: "black",
		backgroundColor: "white",
		borderRadius: 20,
		shadowColor: "black",
		shadowOpacity: 0.6,
		shadowRadius: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 10,
	},
});
