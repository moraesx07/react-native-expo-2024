import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { set, z } from "zod";
import { useAuth } from "../../hooks/Auth/index";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useUsersDatabase } from "../../database/useUsersDatabase";

const paymentSchema = z.object({
  valor_pago: z.number().gt(0),
  user_id: z.number().int().positive(),
  user_cadastro: z.number().int().positive(),
  data_pagamento: z.string().datetime(),
  numero_recebido: z.string().optional(),
  observacao: z.string().optional(),
});

export default function Payment() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSusgestoes] = useState([]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);
  const [observacao, setObservacao] = useState("");
  const [numeroRecibo, setNumeroRecibo] = useState("");
  const valueRef = useRef();
  const { user } = useAuth();
  const { createPayment } = usePaymentsDatabase();
  const { getAllUsers } = useUsersDatabase();

  const handleCalendar = (event, selectedDate) => {
    setViewCalendar(false);
    setData(selectedDate);
  };

  useEffect(() => {
    (async () => {
      valueRef?.current?.focus();
      try {
        const users = await getAllUsers();
        setSusgestoes(users);
        setId(users[0].id);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeValor = (value) => {
    try {
      let valorLimpo = value.replace(",", "").replace(".", "");
      let valorConvertido = Number(valorLimpo) / 100;
      if (valorConvertido === 0 || isNaN(valorConvertido)) {
        setValor("0,00");
        return;
      }
      let valorPtBR = Intl.NumberFormat("pt-BR", {
        style: "decimal",
        minimumFractionDigits: 2,
      }).format(valorConvertido);
      setValor(valorPtBR);
    } catch (error) {
      setValor("0,00");
    }
  };

  const convertValue = (value) => {
    try {
      let valorLimpo = value.replace(",", "").replace(".", "");
      let valorConvertido = Number(valorLimpo) / 100;
      if (valorConvertido === 0 || isNaN(valorConvertido)) {
        return 0;
      }
      return valorConvertido;
    } catch (error) {
      return valorConvertido;
    }
  };

  const handleSubmit = async () => {
    const payment = {
      user_id: id,
      user_cadastro: Number(user.user.id),
      valor_pago: convertValue(valor),
      data_pagamento: data.toISOString(),
      numero_recibo: numeroRecibo,
      observacao,
    };

    try {
      const result = await paymentSchema.parseAsync(payment);
      payment.data_pagamento = new Date(payment.data_pagamento).toISOString().replace("T", " ").split(".")[0];
      const { insertedId } = await createPayment(payment);
      console.log(insertedId);
      setValor("0,00");
      setId(sugestoes[0].id);
      setData(new Date());
      setNumeroRecibo("");
      setObservacao("");
      valueRef?.current?.focus();
    } catch (error) {
      Alert.alert("Erro", `Erro ao inserir pagamento: ${error.message}`);
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.content}>
        <Text style={styles.title}>Inserir Pagamento</Text>
        <View style={styles.inputView}>
          <Ionicons name="wallet" size={24} color="#1E3A5F" />
          <TextInput
            placeholder="Valor"
            keyboardType="decimal-pad"
            style={styles.inputValor}
            value={valor}
            onChangeText={(newValue) => handleChangeValor(newValue)}
            ref={valueRef}
          />
        </View>
        <View style={styles.inputView}>
          <Ionicons name="cash-outline" size={24} color="#1E3A5F" />
          <TextInput
            placeholder="Número do Recibo"
            keyboardType="decimal-pad"
            style={styles.inputValor}
            value={numeroRecibo}
            onChangeText={setNumeroRecibo}
          />
        </View>
        <View style={styles.inputView}>
          <Picker selectedValue={id} onValueChange={(itemValue, index) => setId(itemValue)} style={styles.picker}>
            {sugestoes?.map((item) => {
              return <Picker.Item key={item.id} label={item.nome} value={item.id} />;
            })}
          </Picker>
        </View>
        <View style={styles.inputView}>
          <Text onPress={() => setViewCalendar(true)} style={styles.inputData}>
            {data.toLocaleDateString().split("T")[0]}
          </Text>
          {viewCalendar && (
            <DateTimePicker value={data} onChange={handleCalendar} mode="date" testID="datetimepicker" />
          )}
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Observações"
            style={styles.inputObservacao}
            value={observacao}
            onChangeText={setObservacao}
            multiline={true}
          />
        </View>
        <View style={styles.contentButtons}>
          <Button title="Salvar" onPress={handleSubmit} color="#1E3A5F" />
          <Button title="Continuar" color="#1E3A5F" />
          <Button title="Cancelar" onPress={() => router.back()} color="#D4AF37" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E3F2FD", // Azul claro para o fundo
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E3A5F", // Azul marinho para o título
    marginBottom: 30,
  },
  inputView: {
    borderColor: "#1E3A5F", // Azul marinho para as bordas
    borderWidth: 1,
    width: "100%",
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderRadius: 8,
  },
  inputValor: {
    textAlign: "right",
    padding: 10,
    flex: 1,
    fontSize: 18,
  },
  inputData: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    color: "#1E3A5F", // Azul marinho para a data
    fontWeight: "bold",
  },
  inputObservacao: {
    fontFamily: "regular",
    fontSize: 16,
    flex: 1,
    lineHeight: 20,
    padding: 10,
    borderRadius: 8,
    borderColor: "#1E3A5F",
    borderWidth: 1,
  },
  picker: {
    width: "100%",
    padding: 10,
  },
  contentButtons: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-around",
    width: "100%",
  },
});
