import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
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

export default function Payment() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSusgestoes] = useState([
    {
      id: 1,
      nome: "Roland Cominello",
    },
    {
      id: 2,
      nome: "Joell Penswick",
    },
    {
      id: 3,
      nome: "Dal Ambroisin",
    },
    {
      id: 4,
      nome: "Mirna Puckey",
    },
    {
      id: 5,
      nome: "Connie Stenbridge",
    },
    {
      id: 6,
      nome: "Goldy Newbegin",
    },
    {
      id: 7,
      nome: "Reilly Newborn",
    },
    {
      id: 8,
      nome: "Flynn Scholte",
    },
    {
      id: 9,
      nome: "Cyb Stollard",
    },
    {
      id: 10,
      nome: "Melvin Bacop",
    },
    {
      id: 11,
      nome: "Verene Macenzy",
    },
    {
      id: 12,
      nome: "Adolpho Cosker",
    },
    {
      id: 13,
      nome: "Lay Dignon",
    },
    {
      id: 14,
      nome: "Roderic Carlick",
    },
    {
      id: 15,
      nome: "Loleta Orgen",
    },
    {
      id: 16,
      nome: "Teddie MacMaster",
    },
    {
      id: 17,
      nome: "Crystal Weiss",
    },
    {
      id: 18,
      nome: "Sharron Goldthorp",
    },
    {
      id: 19,
      nome: "Frayda Horsburgh",
    },
    {
      id: 20,
      nome: "Brandais Constantine",
    },
    {
      id: 21,
      nome: "Daffy Valero",
    },
    {
      id: 22,
      nome: "Belinda Bonnet",
    },
    {
      id: 23,
      nome: "Alphard Dicke",
    },
    {
      id: 24,
      nome: "Alyse Slyvester",
    },
    {
      id: 25,
      nome: "Filippa Newbery",
    },
    {
      id: 26,
      nome: "Marcus Kennealy",
    },
    {
      id: 27,
      nome: "Goldia Marder",
    },
    {
      id: 28,
      nome: "Ingemar Camosso",
    },
    {
      id: 29,
      nome: "Agnesse Towers",
    },
    {
      id: 30,
      nome: "Simona Birchwood",
    },
    {
      id: 31,
      nome: "Lizette Palk",
    },
    {
      id: 32,
      nome: "Windham Stansall",
    },
    {
      id: 33,
      nome: "Annalee Sagerson",
    },
    {
      id: 34,
      nome: "Brade Fernandes",
    },
    {
      id: 35,
      nome: "Maurine Krauss",
    },
  ]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);
  const [observacao, setObservacao] = useState("");
  const valueRef = useRef();

  const handleCalendar = (event, selectedDate) => {
    setViewCalendar(false);
    setData(selectedDate);
  };

  useEffect(() => {
    valueRef?.current?.focus();
  }, []);

  const handleChangeValor = (value) => {
    const valorLimpo = value.replace(",", "").replace(".", "");
    console.log("Valor Limpo: ", valorLimpo);
    const valorConvertido = Number(valorLimpo) / 100;
    console.log("Valor Convertido: ", valorConvertido);  
    if (valorConvertido === 0 || isNaN(valorConvertido)) {
      setValor("0,00");
      return;
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <Text>Inserir Pagamento</Text>
        <View style={styles.inputView}>
          <Ionicons name="wallet" size={24} color="black" />
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
          <Picker
            selectedValue={id}
            onValueChange={(itemValue, index) => {
              setId(itemValue);
            }}
            style={{ width: "100%" }}
          >
            {sugestoes?.map((item) => {
              return (
                <Picker.Item key={item.id} label={item.nome} value={item.id} />
              );
            })}
          </Picker>
        </View>
        <View style={styles.inputView}>
          <Text onPress={() => setViewCalendar(true)} style={styles.inputData}>
            {data.toLocaleDateString().split("T")[0]}
          </Text>
          {viewCalendar && (
            <DateTimePicker
              value={data}
              onChange={handleCalendar}
              mode="date"
              testID="datetimepicker"
            />
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
          <Button title="Salvar" />
          <Button title="Continuar" />
          <Button title="Cancelar" onPress={() => router.back()} />
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
    padding: 10,
    backgroundColor: "#F0F0F0",
  },
  inputView: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  contentButtons: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-around",
  },
  inputValor: {
    textAlign: "right",
    padding: 10,
    flex: 1,
  },
  inputData: {
    width: "100%",
    textAlign: "center",
    fontFamily: "regular",
    fontSize: 20,
    padding: 10,
  },
  inputObservacao: {
    fontFamily: "regular",
    fontSize: 20,
    flex: 1,
    lineHeight: 20,
  },
});
