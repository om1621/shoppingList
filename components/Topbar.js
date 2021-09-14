import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import SearchBar from "./SearchBar";
import PlusButton from "./PlusButton";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    borderBottomWidth: 2,
    borderBottomColor: colors.black,
  },
});

const Topbar = () => {
  return (
    <View style={styles.topContainer}>
      <SearchBar />
      <PlusButton />
    </View>
  );
};

export default Topbar;
