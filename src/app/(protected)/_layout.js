import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../hooks/Auth/index";

function CustomDrawerContent(props) {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1E3A5F", // Azul marinho
          paddingVertical: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Image
          source={{
            uri: "https://github.com/moraesx07.png",
          }}
          style={{ width: 100, height: 100, borderRadius: 50, margin: 10 }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "#fff", // Texto em branco para contraste
          }}
        >
          {user?.user?.nome}
        </Text>
      </View>
      <DrawerContentScrollView {...props} style={{ backgroundColor: "#F0F0F0" }}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        onPress={() => signOut()}
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 45,
          width: 170,
          margin: 20,
          backgroundColor: "#ADD8E6", // Dourado para destacar
          borderRadius: 10,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontFamily: "bold", color: "#fff" }}>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Principal",
            headerTitle: "Principal",
            drawerIcon: () => (
              <Ionicons name="home-outline" size={22} color="#1E3A5F" /> // Azul marinho no ícone
            ),
          }}
        />
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: "Listagem",
            headerTitle: "Listagem",
            drawerIcon: () => (
              <Ionicons name="list-outline" size={22} color="#1E3A5F" />
            ),
          }}
        />
        <Drawer.Screen
          name="payment"
          options={{
            drawerLabel: "Pagamento",
            headerTitle: "Pagamento",
            drawerIcon: () => (
              <Ionicons name="diamond-outline" size={22} color="#1E3A5F" />
            ),
          }}
        />
        <Drawer.Screen
          name="details"
          options={{
            headerTitle: "Detalhes",
            drawerItemStyle: { display: "none" }, // Escondendo a opção
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default function Layout() {
  return DrawerLayout();
}
