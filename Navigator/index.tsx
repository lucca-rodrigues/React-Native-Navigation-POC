import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigator } from "./StackNavigator";

export const Stack = createNativeStackNavigator();
export const Drawer = createDrawerNavigator();
export const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="HomeDrawer" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
