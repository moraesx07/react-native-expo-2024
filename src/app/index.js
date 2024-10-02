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
      <Ionicons name="shirt-outline" color="black" style={styles.test} />
      <Text style={styles.title}>GM Wear </Text>
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={20} color="black"  />
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
     <TouchableOpacity style={styles.buttonE} onPress={handleEntrarSuper}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    <TouchableOpacity  onPress={() => router.push("/about")} style={styles.buttonS} >
      <Text style={styles.buttonText}>Sobre</Text>
    </TouchableOpacity>
      <TouchableOpacity  onPress={() => BackHandler.exitApp()} style={styles.buttonA} >
      <Text style={styles.buttonText}>Sair do Aplicativo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    
  },
  title: {
    fontFamily: "regular",
    fontSize: 35,
    textAlign: "center",
    bottom: 60,
  },
  inputbox: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    right: 30,
    top: 20,
  },
  emailinput: {
    height: 40,
    width: 270,
    fontFamily: "regular",
    fontSize: 20,
    flex: 1,
  },
  buttonE: {
    backgroundColor: '#D9D9D9', 
    paddingVertical: 10,        
    paddingHorizontal: 20,       
    borderRadius: 10,             
    shadowRadius: 2,
    top: 50,
    right: 160,
},
buttonS: {
  backgroundColor: '#D9D9D9', 
  paddingVertical: 10,        
  paddingHorizontal: 20,       
  borderRadius: 10,             
  shadowRadius: 2,
bottom: 2, 
  left: 150,
},
buttonA: {
  backgroundColor: '#D9D9D9', 
  paddingVertical: 10,        
  paddingHorizontal: 20,       
  borderRadius: 10,             
  shadowRadius: 2,
  width: 400,
  alignItems: "center",
  top: 220,
},
test: {
  bottom: 40,
  fontSize: 50,
  marginBottom: 10,
},
});
