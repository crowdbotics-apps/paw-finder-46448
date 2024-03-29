import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./logo.png")} />
          <Text style={styles.text}>{"\nPAW FINDER\nWhere you go your pet goes too          "}</Text>
        <View style={styles.VtJujJwd}><Text style={styles.tPLpulTZ}>{"Log In"}</Text></View></View>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#828AB0",
    fontWeight: 700
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: 700,
    marginBottom: 20
  },
  VtJujJwd: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  tPLpulTZ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 29,
    borderRadius: 0
  }
});
export default WelcomeScreen;