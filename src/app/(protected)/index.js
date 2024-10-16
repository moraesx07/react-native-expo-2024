import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Banner } from "../../components/Banner";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Banner />
      <View style={styles.container}>
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
});
