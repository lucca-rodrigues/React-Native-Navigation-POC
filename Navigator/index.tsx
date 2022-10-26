import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";

export function Routes() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="HomeDrawer" component={StackNavigator} />
        {/* <Drawer.Screen name="HomeDrawer" component={BottomTabsNavigator} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
