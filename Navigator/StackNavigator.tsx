import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../Screens";
import { BottomTabsNavigator } from "./BottomTabsNavigator";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs" component={BottomTabsNavigator} />
    </Stack.Navigator>
  );
}
