import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.fadedBlack,
  },
});

const Separator = () => {
  return <View style={styles.separator}></View>;
};

export default Separator;
