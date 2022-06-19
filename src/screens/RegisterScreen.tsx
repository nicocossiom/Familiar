// create a component with two input fields and a button
import { Text, View, TextInput } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
import * as React from "react";
import InitialScreenButton from "../components/InitialScreenButton";
import { styles } from "../styles/LoginRegisterStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type UserSubmitForm = {
	fullname: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	acceptTerms: boolean;
};

type RegisterScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"RegisterScreen"
>;

type Props = { navigation: RegisterScreenNavigationProp };

export default function RegisterScreen({ navigation }: Props) {
	const [isSelected, setSelection] = useState(false);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Register</Text>
			<TextInput
				style={styles.inputInfoBox}
				autoCorrect={false}
				autoCapitalize="none"
				placeholder="Full Name"
				placeholderTextColor={"#CDBBBB"}
			/>
			<TextInput
				style={styles.inputInfoBox}
				autoCorrect={false}
				autoCapitalize="none"
				placeholder="Username"
				placeholderTextColor={"#CDBBBB"}
			/>
			<TextInput
				style={styles.inputInfoBox}
				autoCorrect={false}
				autoCapitalize="none"
				placeholder="Email"
				placeholderTextColor={"#CDBBBB"}
			/>
			<TextInput
				style={styles.inputInfoBox}
				autoCorrect={false}
				autoCapitalize="none"
				placeholder="Password"
				placeholderTextColor={"#CDBBBB"}
			/>
			<TextInput
				style={styles.inputInfoBox}
				autoCorrect={false}
				autoCapitalize="none"
				placeholder="Repeat Password"
				placeholderTextColor={"#CDBBBB"}
			/>
			<BouncyCheckbox
				size={25}
				fillColor="#2066d3"
				unfillColor="#FFFFFF"
				text="I accept the terms and conditions"
				textStyle={{ color: "white" }}
				iconStyle={{ borderColor: "white" }}
				onPress={(isChecked: boolean) => {}}
			/>
			<InitialScreenButton
				title="Register"
				onPress={() =>
					navigation.reset({
						index: 0,
						routes: [
							{
								name: "HomeScreen",
							},
						],
					})
				}
			/>
		</View>
	);
}
