import { Button, Text, View } from "react-native";
function Login({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Page!</Text>
      <Button title="Fazer Login" onPress={() => navigation.navigate("SettingsBottom")} />
    </View>
  );
}
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen Here!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

export { Login, HomeScreen, SettingsScreen };
