import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={{ uri: "https://github.com/moraesx07.png" }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Icon name="location-city" size={20} color="#1E3A5F" style={styles.icon} />
            <Text style={styles.infotext}>Cidade: Presidente Venceslau</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="place" size={20} color="#1E3A5F" style={styles.icon} />
            <Text style={styles.infotext}>Estado: São Paulo</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="phone" size={20} color="#1E3A5F" style={styles.icon} />
            <Text style={styles.infotext}>Contato: (18) 991887734</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="cake" size={20} color="#1E3A5F" style={styles.icon} />
            <Text style={styles.infotext}>Idade: 17 anos</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="favorite" size={20} color="#1E3A5F" style={styles.icon} />
            <Text style={styles.infotext}>Estado Civil: Solteiro</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sobreMim}>Sobre Mim</Text>
      <Text style={styles.sobre}>
        Olá! Sou Guilherme de Moraes, um apaixonado por tecnologia e desenvolvimento. 
        Adoro jogar bola nas horas vagas e estou sempre em busca de novos aprendizados. 
        Atualmente, sou estudante da Etec Milton Gazzetti e desenvolvedor deste projeto, 
        criado com muita dedicação e carinho.
      </Text>
      <Text style={styles.sobreMim}>Sobre o Projeto</Text>
      <Text style={styles.sobre}>
        Este aplicativo foi projetado para inspirar pessoas na escolha de looks, 
        unindo estilo e praticidade. Com uma interface intuitiva, ajudamos os usuários 
        a expressarem sua personalidade de forma criativa e moderna. Estou animado para 
        ver como ele pode transformar sua experiência!
      </Text>

      <Text style={styles.emailLabel}>Meu Email:</Text>
      <View style={styles.infoRow}>
        <Icon name="email" size={20} color="#1E3A5F" style={styles.icon} />
        <Text style={styles.email}>guilhermemoraessantana9@gmail.com</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back("/")}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3F2FD", // Azul claro para o fundo
    padding: 20,
  },
  button: {
    backgroundColor: "#1E3A5F", // Azul marinho para o botão
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 2,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF", // Cor branca para o texto
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "600",
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 85, // Imagem circular
    borderWidth: 3,
    borderColor: "#1E3A5F", // Azul marinho para a borda
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "column",
    gap: 5,
    paddingLeft: 15,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center", // Alinha os ícones e texto
    marginVertical: 2,
  },
  icon: {
    marginRight: 8, // Espaçamento entre ícone e texto
  },
  infotext: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#1E3A5F", // Azul marinho para o texto
    textAlign: "left",
  },
  sobreMim: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E3A5F", // Azul marinho para os subtítulos
    paddingTop: 30,
    textAlign: "center",
  },
  sobre: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#1E3A5F", // Azul marinho para o texto
    padding: 10,
    textAlign: "justify",
  },
  emailLabel: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "600",
    color: "#1E3A5F", // Azul marinho para o título de email
    marginTop: 30,
    textAlign: "center",
  },
  email: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#1E3A5F", // Azul marinho para o email
  },
});
