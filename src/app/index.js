import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hooks/Auth";

export default function App() {
  const { signIn, signOut } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo Pronto para Usar </Text>
      <Button
        title="SignIn Super"
        onPress={() =>
          signIn({ email: "super@gmail.com", password: "Super123!" })
        }
      />
      <Button
        title="SignIn Adm"
        onPress={() =>
          signIn({ email: "adm@gmail.com", password: "Adm123!" })
        }
      />
      <Button
        title="SignIn User"
        onPress={() =>
          signIn({ email: "user@gmail.com", password: "User123!" })
        }
      />
      <Button title="SignOut" onPress={() => signOut()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "regular",
    fontSize: 20,
  },
});
