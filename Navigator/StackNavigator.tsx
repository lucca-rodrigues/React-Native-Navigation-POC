import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../Screens";
import { BottomTabsNavigator } from "./BottomTabsNavigator";

export function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={BottomTabsNavigator} />
    </Stack.Navigator>
  );
}
