import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import List from "../components/List";
import Topbar from "../components/Topbar";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 30,
  },
});

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Topbar />
      <List />
    </SafeAreaView>
  );
}
