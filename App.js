import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ScannerScreen from "./screens/ScannerScreen";
import CreateGabaritoScreen from "./screens/CreateGabaritoScreen";
import GeneratePDFScreen from "./screens/GeneratePDFScreen";
import ResultsScreen from "./screens/ResultsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="Criar Gabarito" component={CreateGabaritoScreen} />
        <Stack.Screen name="Gerar PDF" component={GeneratePDFScreen} />
        <Stack.Screen name="Resultados" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
