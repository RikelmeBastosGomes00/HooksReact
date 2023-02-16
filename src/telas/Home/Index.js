import React from "react";
import Produtores from "./Componentes/Produtores";
import Topo from'./Componentes/Topo';

export default function Home(){
    return<Produtores topo={Topo}/>
}