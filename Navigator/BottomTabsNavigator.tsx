import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SettingsScreen } from "../Screens";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Text } from "react-native";
import { HomeNavigation } from "./StackNavigator";

export function BottomTabsNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 100 },
      }}
    >
      {/* <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="SettingsTab" component={SettingsScreen} /> */}
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Icon name="home" size={20} color={focused ? "#0a9396" : "#d62828"} />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? "#0a9396" : "#d62828",
                  width: 50,
                  fontSize: 11,
                  textAlign: "center",
                }}
              >
                {/* Texto Aqui */}
                Home
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Icon name="user-cog" size={20} color={focused ? "#0a9396" : "#d62828"} />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? "#0a9396" : "#d62828",
                  width: 50,
                  fontSize: 11,
                  textAlign: "center",
                }}
              >
                {/* Texto Aqui */}
                Config
              </Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
