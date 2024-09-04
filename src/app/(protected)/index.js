import { Button, Text, View } from "react-native";
import { useAuth } from "../../hooks/Auth";
import {router } from "expo-router";
export default function Home() {
  const {signOut} = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
    </View>
  );
}
