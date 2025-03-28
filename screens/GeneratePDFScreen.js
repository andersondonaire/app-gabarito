import React from "react";
import { View, Text, Button } from "react-native";
import { printAsync } from "expo-print";

export default function GeneratePDFScreen() {
  const generatePDF = async () => {
    const html = `<h1>Gabarito</h1><p>Aqui vão as respostas...</p>`;
    await printAsync({ html });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Gerar PDF 📄</Text>
      <Button title="Gerar PDF" onPress={generatePDF} />
    </View>
  );
}
