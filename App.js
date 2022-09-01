import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
  return (
    <TailwindProvider>
      <HomeScreen />
    </TailwindProvider>
  );
}
