import { StatusBar } from "expo-status-bar";
import {
  Alert,
  BackHandler,
  Button,
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
  const { signIn, signOut } = useAuth();
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
      <Text style={styles.title}>Aplicativo de Estilos de Roupas </Text>
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={20} color="black" />
        <TextInput
          style={styles.emailinput}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={20} color="black" />
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
          color="black"
          onPress={tooglePasswordVisibility}
        />
      </View>
     <TouchableOpacity style={styles.button} onPress={handleEntrarSuper}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    <TouchableOpacity  onPress={() => router.push("/about")} style={styles.button} >
      <Text style={styles.buttonText}>Sobre</Text>
    </TouchableOpacity>
      <TouchableOpacity  onPress={() => BackHandler.exitApp()} style={styles.button} >
      <Text style={styles.buttonText}>Sair do Aplicativo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    
  },
  title: {
    fontFamily: "regular",
    fontSize: 20,
    textAlign: "center",
  },
  inputbox: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#6c757d",
    borderRadius: 10,
  },
  emailinput: {
    flex: 1,
    fontFamily: "regular",
    fontSize: 20,
  },
  button: {
    backgroundColor: '#6c757d', 
    paddingVertical: 10,        
    paddingHorizontal: 20,       
    borderRadius: 10,             
    shadowRadius: 2,
    top: 20,
},
});
