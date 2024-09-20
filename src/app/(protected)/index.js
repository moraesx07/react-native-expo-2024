import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Banner } from "../../components/Banner";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Banner />
      <View style={styles.container}>
        <Text style={styles.title}>
          Bem-vindo ao GM Store!
          </Text>
          <View style={styles.pesquisa}>
          <Ionicons name="search" size={24} color="black" style={styles.lupa}  />
          </View>
          <View style={styles.container2}>
          <Image source={require("../../assets/camisa.jpeg")} style={styles.camisa1} />
          <Text style={styles.texto}>camiseta casual Nike</Text>
          <Image source={require("../../assets/camisa2.jpeg")} style={styles.camisa2} />
          <Text style={styles.texto2}>camiseta casual Nike</Text>
          <Image source={require("../../assets/camisa3.jpeg")} style={styles.camisa2} />
          <Text style={styles.texto2}>camiseta casual Nike</Text>
          <Image source={require("../../assets/camisa4.jpg")} style={styles.camisa3} />
          <Text style={styles.texto3}>camiseta casual Nike</Text>
          </View>
          <Text style={styles.fim}>Novas atualizações em Breve!</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 370,
  },
  title: {
    fontSize: 28,
    fontFamily: "blackitalic",
    marginBottom: 10,
    top: 325,
  },
  container2: {
    top: 230,
    alignItems: "center",
    
  },
  pesquisa: {
    gap: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    width: 270,
    top: 320,
  },
  lupa: {
    left: 110,
  },
  camisa1: {
    width: 150,
    height: 150,
    left: 90,
    top: 100,
    gap: 10,
    padding: 10,
  },
  camisa2: {
    width: 150,
    height: 150,
    right: 90,
    bottom: 70,
  },
  camisa3: {
    width: 150,
    height: 150,
    left: 90,
  bottom: 238,
    },
  texto: {
    fontFamily: "regular",
    fontSize: 15,
   top: 100,
   left: 85,
  },
  texto2: {
    fontFamily: "regular",
    fontSize: 15,
    bottom: 70,
    right: 85,
  },
  texto3: {
    fontFamily: "regular",
    fontSize: 15,
   left: 85,
   bottom: 238,
  },
  fim: {
    fontFamily: "blackitalic",
    fontSize: 24,
    top: 30,

  },
});
