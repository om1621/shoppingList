import React, { useContext } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../constants/colors";
import { ListContext } from "../utils/ListContext";
import ListItem from "./ListItem";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    paddingVertical: 15,
    marginRight: 10,
  },
  searchInput: {
    borderWidth: 2,
    borderColor: colors.black,
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
});

const SearchBar = () => {
  const { setQueryValue } = useContext(ListContext);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search......"
        onChangeText={(val) => setQueryValue(val)}
      />
    </View>
  );
};

export default SearchBar;
