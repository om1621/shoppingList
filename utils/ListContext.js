import React, { createContext, useState } from "react";

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {
  const [listItems, setListItems] = useState([
    "Milk",
    "Coffee",
    "Oranges",
    "Bread",
  ]);

  const [queryValue, setQueryValue] = useState("");

  const initialValue = {
    listItems,
    setListItems,
    queryValue,
    setQueryValue,
  };

  return (
    <ListContext.Provider value={initialValue}>{children}</ListContext.Provider>
  );
};
