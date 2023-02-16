import React from "react";
import { View,SafeAreaView, StyleSheet } from "react-native";
import Home from './src/telas/Home/Index';

function App(){
return<SafeAreaView style={estilos.tela}>
    <Home />
    </SafeAreaView>

}
export default App;
const estilos = StyleSheet.create({
    tela: {
     flex:1,
    }
    })
    