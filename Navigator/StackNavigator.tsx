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
      <Stack.Screen name="Home" component={BottomTabsNavigator} />
    </Stack.Navigator>
  );
}

export function HomeNavigation({ navigation }: any) {
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
