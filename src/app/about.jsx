import { router } from "expo-router";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function About() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0",
        
      }}
    >
       <Image source={{ uri: "https://github.com/moraesx07.png" }}
        style={{ width: 200, height: 200, borderRadius: 100, margin: 10 }}
       /> 
        <Text style={{ fontFamily: "bold", fontSize: 20,}}>
            Sobre Mim
        </Text>
      <Text style={{ fontFamily: "regular", fontSize: 17, padding: 5, textAlign: "justify"  }}>
      Olá, meu nome é Guilherme de Moraes, tenho 17 anos, estudo na Etec Milton Gazzetti 
      e sou responsável pelo desenvolvimento deste projeto solicitado pelo professor Graziani Zanfolin.
       Estou muito feliz com o resultado que obtive!
      </Text>
      <Text style={{ fontFamily: "bold", fontSize: 20, padding: 5 }}>
            Sobre o Projeto
      </Text>
      <Text style={{ fontFamily: "regular", fontSize: 17, padding: 5, textAlign: "justify"  }}>
      Meu projeto é sobre um aplicativo de estilos de roupas, que visa ajudar os usuários
       a encontrar e combinar looks de forma prática e inspiradora. Através de uma interface intuitiva,
        o aplicativo oferece sugestões personalizadas, permitindo que cada pessoa expresse seu estilo único.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => router.replace("/")}>
    <Text style={styles.buttonText}>Voltar</Text>
</TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#343a40', 
        paddingVertical: 10,        
        paddingHorizontal: 20,       
        borderRadius: 10,             
        shadowRadius: 2,
        top: 20,
    },
    buttonText: {
        color: '#FFFFFF',           
        fontSize: 16,                
        fontFamily: "regular",        
    },
});
