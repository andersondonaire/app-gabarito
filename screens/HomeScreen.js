import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Home 🚀</Text>
      <Button title="Ir para Scanner" onPress={() => navigation.navigate("Scanner")} />
      <Button title="Ir para Criar Gabarito" onPress={() => navigation.navigate("Criar Gabarito")} />
      <Button title="Ir para Gerar PDF" onPress={() => navigation.navigate("Gerar PDF")} />
      <Button title="Ir para Resultados" onPress={() => navigation.navigate("Resultados")} />
    </View>
  );
}
