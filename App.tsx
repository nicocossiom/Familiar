import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import InitialScreen from "./src/screens/InitialScreen";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";

export type RootStackParamList = {
	InitialScreen: undefined; // undefined because you aren't passing any params to the login scren
	LoginScreen: undefined;
	RegisterScreen: undefined;
	HomeScreen: undefined;
};

export default function App() {
	const Stack = createStackNavigator<RootStackParamList>();
	return (
		<NavigationContainer>
			<SafeAreaProvider>
				<Stack.Navigator>
					<Stack.Screen
						name="InitialScreen"
						component={InitialScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="LoginScreen"
						component={LoginScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="RegisterScreen"
						component={RegisterScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="HomeScreen"
						component={HomeScreen}
						options={{
							headerShown: false,
						}}
					/>
				</Stack.Navigator>
			</SafeAreaProvider>
		</NavigationContainer>
	);
}
