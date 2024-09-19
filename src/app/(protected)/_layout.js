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
          backgroundColor: "#f0f0f0",
          paddingVertical: 10,
        }}
      >
        <Image
          source={{
            uri: "https://github.com/moraesx07.png",
          }}
          style={{ width: 100, height: 100, borderRadius: 50, margin: 10 }}
        />
        <Text
          style={{ textAlign: "center", fontSize: 16, fontFamily: "regular" }}
        >
          {user?.user?.nome}
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        onPress={() => signOut()}
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 40,
          width: 170,
          margin: 10,
          backgroundColor: "#343a40",
          borderRadius: 10, 
          left: 37,
        }}
      >
        <Text style={{ color: "white", fontFamily: "bold" }}>Deslogar</Text>
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
              <Ionicons name="home-outline" size={20} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: "Listagem",
            headerTitle: "Listagem",
            drawerIcon: () => (
              <Ionicons name="list-outline" size={20} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="payment"
          options={{
            drawerLabel: "Pagamento",
            headerTitle: "Pagamento",
            drawerIcon: () => (
              <Ionicons name="diamond-outline" size={20} color="black" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default function Layout() {
  return DrawerLayout();
}
