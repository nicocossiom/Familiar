// create a component with two input fields and a button
import {
	Text,
	View,
	TextInput,
	Linking,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
import * as React from "react";
import InitialScreenButton from "../components/InitialScreenButton";
import { styles } from "../styles/LoginRegisterStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { Header } from "react-navigation-stack";

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
		<ScrollView
			scrollEnabled={false}
			keyboardShouldPersistTaps="never"
			contentContainerStyle={styles.container}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior="position"
				enabled
				contentContainerStyle={styles.container}
				keyboardVerticalOffset={-100} //</ScrollView> adjust the value here if you need more padding
			>
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
					// onSubmitEditing={Keyboard.dismiss}
				/>
				<BouncyCheckbox
					size={25}
					fillColor="#2066d3"
					unfillColor="#FFFFFF"
					textComponent={
						<Text
							style={{
								color: "white",
								marginLeft: 10,
								textDecorationLine: "underline",
							}}
							onPress={() =>
								Linking.openURL("https://www.magloft.com/publications/6474/terms ")
							}
						>
							I accept the terms and conditions ↗️
						</Text>
					}
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
			</KeyboardAvoidingView>
		</ScrollView>
	);
}
