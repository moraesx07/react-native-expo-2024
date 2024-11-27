import { StatusBar } from "expo-status-bar";
import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const tooglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email, password });
      router.replace("/");
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="shirt-outline" color="#000080" style={styles.icon} />
      <Text style={styles.title}>GM Wear</Text>
      <View
        style={{
          height: 2,
          backgroundColor: "#000080", // Azul marinho para a linha
          width: 80,
          marginVertical: 20,
        }}
      />
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={20} color="#000080" />
        <TextInput
          style={styles.emailinput}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={20} color="#000080" />
        <TextInput
          style={styles.emailinput}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={passwordVisibility}
        />
        <Ionicons
          name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
          size={20}
          color="#000080"
          onPress={tooglePasswordVisibility}
        />
      </View>
      <TouchableOpacity
        style={({ pressed }) => [
          styles.buttonE,
          pressed && { backgroundColor: "#1E3A5F" }, // Azul escuro para o botão pressionado
        ]}
        onPress={handleEntrarSuper}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("about")}
        style={styles.buttonS}
      >
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => BackHandler.exitApp()}
        style={styles.buttonA}
      >
        <Text style={styles.buttonText}>Sair do Aplicativo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/maintenance")}
        style={styles.buttonMaintenance}
      >
        <Text style={styles.maintenanceText}>Banco de dados</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA", // Azul claro para o fundo
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 38,
    fontWeight: "bold",
    color: "#000080", // Azul marinho para o título
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  icon: {
    fontSize: 80,
    marginBottom: 20,
  },
  inputbox: {
    flexDirection: "row",
    gap: 15,
    marginHorizontal: 40,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#000080", // Azul marinho para a borda
  },
  emailinput: {
    height: 45,
    width: 270,
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#333333",
    flex: 1,
    paddingLeft: 5,
  },
  buttonE: {
    backgroundColor: "#1E3A5F", // Azul escuro para o botão
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
    shadowRadius: 3,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    elevation: 3,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#000080", // Cor branca para o texto
    fontWeight: "bold",
  },
  buttonS: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000080", // Azul marinho para a borda
  },
  buttonA: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F44336", // Cor vermelha para a borda de saída
  },
  buttonMaintenance: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000080", // Azul marinho para a borda
    width: "80%",
    alignItems: "center",
  },
  maintenanceText: {
    color: "#000080", // Azul marinho para o texto de manutenção
    fontSize: 16,
    fontWeight: "bold",
  },
});
