import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Separator from "./Separator";

const styles = StyleSheet.create({
  listItemContainer: {
    paddingHorizontal: 15,
  },
  textContainer: {
    paddingVertical: 15,
  },
  itemText: {
    fontSize: 16,
  },
});

const ListItem = ({ text }) => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <Separator />
    </View>
  );
};

export default ListItem;
