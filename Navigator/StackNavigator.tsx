import { Stack } from ".";
import { Login } from "../Screens";
import { BottomTabsNavigator } from "./BottomTabsNavigator";

export function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Teste" component={BottomTabsNavigator} />
    </Stack.Navigator>
  );
}
