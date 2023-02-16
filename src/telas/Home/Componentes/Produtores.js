import React,{useEffect,useState} from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import Produtor from "./Produtor";
import useProdutores from "../../../Hooks/useProdutores";

export default function Produtores({topo : Topo}){
   const [titulo,lista] = useProdutores();
    const TopoLista = () =>{
    return<> 
    <Topo/>
    <Text style ={estilos.titulol}>{titulo}</Text>
    </>
    }

    return<FlatList 
    data={lista} 
    renderItem={({item}) => <Produtor {...item} />}
     keyExtractor={({nome}) => nome}
     ListHeaderComponent={TopoLista} />
}
const estilos = StyleSheet.create({

    titulol:{
        fontSize:20,
        lineHeight:32,
        marginHorizontal:16,
        marginTop:16,
        fontWeight: 'bold',
        color:"#464646",
    }
})