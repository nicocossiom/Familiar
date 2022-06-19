import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../../App";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "HomeScreen">;

type Props = { navigation: HomeScreenNavigationProp };

export default function HomeScreen({ navigation }: Props) {
	
	return (
		<View>
			<Text>Home</Text>
		</View>
	);
}
