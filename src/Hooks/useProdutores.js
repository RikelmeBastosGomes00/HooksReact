import { useState,useEffect } from "react";
import { carregaProdutores } from "../servicos/CarregaDados";
export default function useProdutores(){
    const [titulo,setTitulo] = useState('');
    const [lista,setLista] = useState([])
    useEffect(()=> {
        const retorno = carregaProdutores();
        setLista(retorno.lista);
        setTitulo(retorno.titulo);
    }, []);
    return [titulo,lista];
}