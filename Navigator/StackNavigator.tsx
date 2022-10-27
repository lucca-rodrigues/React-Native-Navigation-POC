import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { HomeScreen, Login } from "../Screens";
import { BottomTabsNavigator } from "./BottomTabsNavigator";

const Stack = createNativeStackNavigator();
export function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Teste" component={BottomTabsNavigator} />
    </Stack.Navigator>
  );
}
