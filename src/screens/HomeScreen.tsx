import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../../App";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./SettingsScreen";
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "HomeScreen">;

type Props = { navigation: HomeScreenNavigationProp };
const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation }: Props) {
	return (
		<View>
			<Text>Home</Text>
		</View>
	);
}

function BottomNavBar() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>
	);
}
