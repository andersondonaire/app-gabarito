import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function CreateGabaritoScreen() {
  const [answers, setAnswers] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Criar Gabarito 📝</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: "80%",
          marginVertical: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Digite as respostas corretas (ex: A,B,C,D,E)"
        value={answers}
        onChangeText={setAnswers}
      />
      <Button title="Salvar Gabarito" onPress={() => console.log("Gabarito Salvo:", answers)} />
    </View>
  );
}
