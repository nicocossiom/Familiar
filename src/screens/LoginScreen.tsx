// create a component with two input fields and a button
import {
	Text,
	Keyboard,
	TextInput,
	View,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import * as React from "react";
import InitialScreenButton from "../components/InitialScreenButton";
import { styles } from "../styles/LoginRegisterStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "LoginScreen">;

type Props = { navigation: LoginScreenNavigationProp };

export default function LoginScren({ navigation }: Props) {
	return (
		<ScrollView
			scrollEnabled={false}
			keyboardShouldPersistTaps="never"
			contentContainerStyle={styles.container}
		>
			<KeyboardAvoidingView style={styles.container}>
				<Text style={styles.title}>Login</Text>
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
					placeholder="Password"
					placeholderTextColor={"#CDBBBB"}
					caretHidden={true}
					onSubmitEditing={Keyboard.dismiss}
				/>

				<InitialScreenButton
					title="Login"
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
