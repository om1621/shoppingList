import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { ListContextProvider } from "./utils/ListContext.js";

export default function App() {
  return (
    <ListContextProvider>
      <HomeScreen />
    </ListContextProvider>
  );
}
