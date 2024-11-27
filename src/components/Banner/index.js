import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  const [page, setpage] = useState(0);

  const onPageSelected = (e) => {
    setpage(e.nativeEvent.position);
  };

  return (
    <View style={StyleSheet.container}>
      <PagerView 
      initialPage={0}
      style={styles.content}
      onPageSelected={onPageSelected}
      >
        <View key="1" style={styles.page}>
        <Image source={require("../../assets/banner1.jpeg")} style={{ width: 450, height: 370 }} />
        </View>
        <View key="2" style={styles.page}>
        <Image source={require("../../assets/banner2.jpg")} style={{ width: 450, height: 370 }} />
        </View>
        <View key="3" style={styles.page}>
        <Image source={require("../../assets/banner3.jpg")} style={{ width: 450, height: 370 }} />
        </View>
      </PagerView>
      <View style={styles.bulletContent}>
        <View style={[styles.bullet, page === 0 && styles.activeBullet]} />
        <View style={[styles.bullet, page === 1 && styles.activeBullet]} />
        <View style={[styles.bullet, page === 2 && styles.activeBullet]} />
    </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 100,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  page: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  bulletContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#999",
    margin: 10,
  },
  activeBullet: {
    backgroundColor: "#000",
  },
  text: {
    fontSize: 20,
    fontFamily: "bold",
  },

})