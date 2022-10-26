import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, SettingsScreen } from "../Screens";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Text, View } from "react-native";
// import { HomeNavigation } from "./StackNavigator";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigation({ navigation }: any) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        title: "Tela Home",
        headerLeft: () => (
          <View style={{ margin: 10 }}>
            <Icon name="bars" size={25} color={"#000"} onPress={() => navigation.openDrawer()} />
          </View>
        ),
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export function BottomTabsNavigator() {
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
