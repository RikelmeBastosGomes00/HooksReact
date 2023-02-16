import React from "react";
import { Text,View,Image,StyleSheet } from "react-native";
import logo from'../../../assets/logo.png';
import { carregaTopo } from "../../../servicos/CarregaDados";

class Topo extends React.Component{
    state = {
        topo:{
        boaVindas:'', 
        lgnda:'', 
    }
}
   atualizaTopo(){
const retorno = carregaTopo();
this.setState({topo:retorno})
   }
 
    componentDidMount(){
   this.atualizaTopo();
    }
    render(){
return <View style ={estilos.topo}>
    <Image source={logo} style ={estilos.imagem} />
    <Text style ={estilos.boaVindas}>{this.state.topo.boaVindas}</Text>
    <Text style ={estilos.lgnda}>{this.state.topo.lgnda}</Text>
    </View>
}
}
const estilos = StyleSheet.create ({
topo:{
 backgroundColor:"#F6F6F6" ,
  padding:16,  
},
imagem:{
width:70,
height:28,
},
boaVindas:{
marginTop:24,
fontSize:26,
lineHeight:42,
fontWeight:'bold',
color:'#464646',
},
lgnda:{
fontSize:16,
lineHeight:26,
color:'#A3A3A3',
}
});
export default Topo;