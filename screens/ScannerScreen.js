import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Camera } from "expo-camera";

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View><Text>Solicitando permissão da câmera...</Text></View>;
  }
  if (hasPermission === false) {
    return <View><Text>Permissão negada</Text></View>;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Escanear Gabarito 📷</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
