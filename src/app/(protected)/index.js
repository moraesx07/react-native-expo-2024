import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Banner } from "../../components/Banner";
import { useState } from "react";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [showFilters, setShowFilters] = useState(false);  // Estado para controlar a visibilidade dos filtros

  const filterImages = (filter) => {
    setSelectedFilter(filter);
  };

  // Função para verificar se a imagem deve ser exibida com base no filtro
  const shouldDisplayImage = (style) => {
    return selectedFilter === 'todos' || selectedFilter === style;
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1 }}>
        <Banner />

        {/* Botão para alternar visibilidade dos filtros em estilo hamburguer */}
        <TouchableOpacity 
          style={styles.toggleButton} 
          onPress={() => setShowFilters(!showFilters)} 
        >
          <View style={styles.hamburgerIcon}>
            <View style={styles.hamburgerLine} />
            <View style={styles.hamburgerLine} />
            <View style={styles.hamburgerLine} />
          </View>
        </TouchableOpacity>

        {/* Exibir filtros somente se showFilters for verdadeiro */}
        {showFilters && (
          <View style={styles.filterContainer}>
            <TouchableOpacity style={styles.filterButton} onPress={() => filterImages('camiseta')}>
              <Text style={styles.filterButtonText}>Camisetas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton} onPress={() => filterImages('jaqueta')}>
              <Text style={styles.filterButtonText}>Jaquetas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton} onPress={() => filterImages('todos')}>
              <Text style={styles.filterButtonText}>Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton} onPress={() => filterImages('calca')}>
              <Text style={styles.filterButtonText}>Calças</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton} onPress={() => filterImages('short')}>
              <Text style={styles.filterButtonText}>Shorts</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.container}>
          {/* Quadrados organizados em 2 linhas */}
          <View style={styles.row}>
            {shouldDisplayImage('todos') || shouldDisplayImage('camiseta') ? (
              <View style={styles.imageWrapper}>
                <Image source={require("../../assets/camiseta1.jpg")} style={styles.image} />
              </View>
            ) : null}
            {shouldDisplayImage('todos') || shouldDisplayImage('camiseta') ? (
              <View style={styles.imageWrapper}>
                <Image source={require("../../assets/camiseta2.jpg")} style={styles.image} />
              </View>
            ) : null}
          </View>

          <View style={styles.row}>
            {shouldDisplayImage('todos') || shouldDisplayImage('jaqueta') ? (
              <View style={styles.imageWrapper}>
                <Image source={require("../../assets/jaqueta1.jpg")} style={styles.image} />
              </View>
            ) : null}
            {shouldDisplayImage('todos') || shouldDisplayImage('jaqueta') ? (
              <View style={styles.imageWrapper}>
                <Image source={require("../../assets/jaqueta2.jpg")} style={styles.image} />
              </View>
            ) : null}
          </View>

          <View style={styles.row}>
            {shouldDisplayImage('todos') || shouldDisplayImage('calca') ? (
              <View style={styles.imageWrapper}>
                <Image source={require("../../assets/calca1.jpg")} style={styles.image} />
              </View>
            ) : null}
            {shouldDisplayImage('todos') || shouldDisplayImage('calca') ? (
              <View style={styles.imageWrapper}>
                <Image source={require("../../assets/calca2.jpg")} style={styles.image} />
              </View>
            ) : null}
          </View>

          <View style={styles.row}>
            {shouldDisplayImage('todos') || shouldDisplayImage('shorts') ? (
              <View style={styles.imageWrapper}>
                <Image source={require("../../assets/short1.jpg")} style={styles.image} />
              </View>
            ) : null}
            {shouldDisplayImage('todos') || shouldDisplayImage('shorts') ? (
              <View style={styles.imageWrapper}>
                <Image source={require("../../assets/short2.jpg")} style={styles.image} />
              </View>
            ) : null}
          </View>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Alinha os itens no topo
    alignItems: "center",
    marginTop: 20, // Ajusta o espaçamento abaixo do banner
    paddingBottom: 20, // Para garantir que o conteúdo não fique muito próximo da borda inferior
  },
  toggleButton: {
    backgroundColor: "#ADD8E6",  // Azul claro
    padding: 10, // Tamanho do botão reduzido
    borderRadius: 15, // Bordas arredondadas
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10, // Ajusta o espaçamento abaixo
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  hamburgerIcon: {
    width: 30,
    height: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  hamburgerLine: {
    width: 25,
    height: 3,
    backgroundColor: "#003366", // Cor das linhas do menu hamburguer
    borderRadius: 2,
  },
  filterContainer: {
    flexDirection: 'column',  // Organiza os botões verticalmente
    alignItems: 'center',     // Centraliza os botões
    width: '100%',
    padding: 10,
    backgroundColor: '#f8f8f8', // Cor de fundo do filtro
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: "#003366",  // Azul marinho
    paddingVertical: 8,  // Diminuindo o tamanho do botão
    paddingHorizontal: 20,
    borderRadius: 25, // Bordas arredondadas
    marginVertical: 4, // Espaço entre os botões
    width: "80%",  // Largura ajustada para os botões ficarem mais compactos
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  filterButtonText: {
    fontSize: 12, // Diminuindo o tamanho do texto
    color: "#ADD8E6",  // Azul claro
    fontWeight: "bold",
    textAlign: "center", // Alinha o texto ao centro
  },
  row: {
    flexDirection: "row", // Organiza os quadrados horizontalmente
    justifyContent: "space-between", // Espaça os quadrados igualmente
    width: "90%", // Limita a largura da linha para 90% da tela
    marginBottom: 20, // Espaçamento entre as linhas de quadrados
  },
  imageWrapper: {
    width: 180, // Tamanho do quadrado
    height: 180,
    backgroundColor: "#fff", // Cor de fundo do quadrado
    borderWidth: 2, // Espessura da borda
    borderColor: "#D4AF37", // Cor da borda
    justifyContent: "center",
    alignItems: "center", // Centraliza a imagem dentro do quadrado
    borderRadius: 10, // Bordas arredondadas para o quadrado
    shadowColor: "#000", // Adiciona sombra
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: "90%", // A imagem ocupa 90% do quadrado
    height: "90%",
    resizeMode: "cover", // Ajusta a imagem dentro do espaço disponível
    borderRadius: 8, // Borda arredondada da imagem
  },
});
