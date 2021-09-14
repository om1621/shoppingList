import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { ListContext } from "../utils/ListContext";

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 15,
    paddingRight: 0,
    margin: 10,
    marginHorizontal: 15,
    borderLeftWidth: 2,
    borderLeftColor: colors.black,
  },
});

const PlusButton = () => {
  const { listItems, setListItems } = useContext(ListContext);

  const addNewRandomItem = () => {
    // Generating Random string of length less than or equal to 6
    let result = "";
    let length = Math.ceil(Math.random() * 8);
    let superString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
      result += superString.charAt(Math.floor(Math.random() * 52));
    }
    setListItems([...listItems, result]);
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={addNewRandomItem}>
        <AntDesign name="plus" size={24} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default PlusButton;
