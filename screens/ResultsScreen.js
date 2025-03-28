import React from "react";
import { View, Text } from "react-native";

export default function ResultsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Resultados 📊</Text>
      <Text>Aqui serão exibidos os acertos e erros.</Text>
    </View>
  );
}
