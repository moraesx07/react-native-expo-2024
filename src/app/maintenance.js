import { router } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useMaintenanceDatabase } from "../database/useMaintenanceDatabase";

export default function Maintenance() {
  const { resetDatabase, importUsers, importPayments } = useMaintenanceDatabase();

  const handleReset = async () => {
    try {
      await resetDatabase();
      Alert.alert("Sucesso", "Banco de dados zerado com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Erro ao zerar o banco de dados.");
    }
  };

  const handleImportUsers = async () => {
    try {
      await importUsers();
      Alert.alert("Sucesso", "Usuários importados com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Erro ao importar usuários.");
    }
  };

  const handleImportPayments = async () => {
    try {
      await importPayments();
      Alert.alert("Sucesso", "Pagamentos importados com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Erro ao importar pagamentos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.windowTitle}>Manutenção do Banco</Text>
      <View style={styles.contentButtons}>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Zerar Banco</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleImportUsers}>
          <Text style={styles.buttonText}>Importar Usuários</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleImportPayments}>
          <Text style={styles.buttonText}>Importar Pagamentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
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
  windowTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E3A5F", // Azul marinho para o título
    marginBottom: 30,
  },
  contentButtons: {
    gap: 15,
    marginVertical: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#1E3A5F", // Azul marinho para o fundo do botão
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    elevation: 3,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF", // Branco para o texto
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
});
