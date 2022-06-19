import { View, StyleSheet, Image, Text } from "react-native";
import InitialScreenButton from "../components/InitialScreenButton";
import { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "LoginScreen">;

type Props = { navigation: LoginScreenNavigationProp };

export default function InitialScreen({ navigation }: Props) {
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
