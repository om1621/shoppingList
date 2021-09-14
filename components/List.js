import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./ListItem";
import { ListContext } from "../utils/ListContext";

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    flex: 1,
  },
  helperText: {
    margin: 20,
    textAlign: "center",
  },
});

const List = () => {
  const { listItems, queryValue } = useContext(ListContext);

  // filtering the available list items based on the input query
  const filteredItems = listItems.filter((listItem) =>
    listItem.toLowerCase().includes(queryValue.toLowerCase())
  );

  return (
    <View style={styles.listContainer}>
      {filteredItems.length > 0 ? (
        <FlatList
          data={filteredItems}
          renderItem={({ item }) => {
            return <ListItem text={item} />;
          }}
          keyExtractor={(item) => item}
        />
      ) : (
        <Text style={styles.helperText}>
          No item availabe for this query please try something different ;)
        </Text>
      )}
    </View>
  );
};

export default List;
