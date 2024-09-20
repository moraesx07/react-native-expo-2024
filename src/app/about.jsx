import { router } from "expo-router";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function About() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D9D9D9",
      }}
    >
      <View style={styles.row}>
      <Image
        source={{ uri: "https://github.com/moraesx07.png" }}
        style={styles.image}
      />
        <View style={styles.infoContainer} >
        <Text style={styles.infotext}>Cidade:Presidente Venceslau</Text>
        <Text style={styles.infotext}>Estado: São Paulo</Text>
        <Text style={styles.infotext}>Contato: (18) 991887734</Text>  
      <Text style={styles.infotext}>Idade: 17 anos</Text>
      <Text style={styles.infotext}>Estado Civil: Solteiro</Text>
      </View>
      </View>

      <Text style={styles.sobreMim}>Sobre Mim</Text>
      <Text
        style={styles.sobre}
      >
        Olá, meu nome é Guilherme de Moraes. Tenho como hobby jogar bola nas horas vagas
         e sou estudante da Etec Milton Gazzetti. Sou responsável pelo desenvolvimento deste
          projeto solicitado pelo professor Graziani Zanfolin e estou muito feliz com o resultado que obtive!
      </Text>
      <Text style={styles.sobreMim}>
        Sobre o Projeto
      </Text>
      <Text
        style={styles.sobre}
      >
        Meu projeto é sobre um aplicativo de estilos de roupas, que visa ajudar
        os usuários a encontrar e combinar looks de forma prática e inspiradora.
        Através de uma interface intuitiva, o aplicativo oferece sugestões
        personalizadas, permitindo que cada pessoa expresse seu estilo único.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#343a40",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowRadius: 2,
    top: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "regular",
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 100,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "column",
    gap: 5,
  },
  infotext: {
    fontFamily: "medium",
    fontSize: 17,
    textAlign: "center",
  },
  sobreMim: {
    fontFamily: "bold", fontSize: 20, paddingTop: 30
  },
  sobre: {
    fontFamily: "regular", fontSize: 17, padding: 5, textAlign: "justify"
  },
});
