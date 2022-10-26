import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen, Login, SettingsScreen } from "./Screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabsNavigator } from "./Navigator/BottomTabsNavigator";
import { StackNavigator } from "./Navigator/StackNavigator";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          {/* <Drawer.Screen name="HomeDrawer" component={BottomNavigator} /> */}
          {/* <Drawer.Screen name="Home" component={Login} /> */}
          <Drawer.Screen name="Home" component={StackNavigator} />
          {/* <Drawer.Screen name="Settings" component={BottomTabsNavigator} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
