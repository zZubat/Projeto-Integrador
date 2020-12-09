import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View, Text} from 'react-native';
import Linha from './components/Linha';
import {Header} from 'react-native-elements';
<<<<<<< HEAD
import api from './api';
=======

const dados = [
  {
    key: 1,
    img: "https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?w=328",
    nome: "Rogério lima",
    profissao: "pintor",
    telefone:"(16) 997483162",
    avaliacao:"5",
  },
  {
    key: 2,
    img: "",
    nome: "Claudio pereira",
    profissao: "encanador",
    telefone:"(16) 996487234",
    avaliacao:"4,8",
  },
  {
    key: 3,
    img: "",
    nome: "Thalles alcantra",
    profissao: "eletricista",
    telefone:"(16) 999753185",
    avaliacao:"4,6",
  },
  {
    key: 4,
    img: "",
    nome: "José almeida",
    profissao: "pedreiro",
    telefone:"(16) 995784634",
    avaliacao:"4,5",
  },
  {
    key: 5,
    img: "",
    nome: "Lucas miranda",
    profissao: "marceneiro",
    telefone:"(16) 993215646",
    avaliacao:"4,1",
  },
]
>>>>>>> f14ae3a921df4fc69d0a0193aa2b23c961a109c1

const App = () => {
  const [profissionais, setProfissionais] = useState([]);

  useEffect(() => {
    carregaProfissionais();
  }, []);

  async function carregaProfissionais(){
    setProfissionais([]);
    const response = await api.get('/db');
    setProfissionais(response['data'].dados);
}

  return( 

    <View>
      <Header
          backgroundColor= '#000'
          leftComponent={{ icon: 'menu', color: '#fff' }}
          rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Text>Profissionais</Text>
      <FlatList
        data={profissionais}
        keyExtractor={(item)=> item.key.toString()}
        renderItem={ ({item}) => 
          <TouchableOpacity>
<<<<<<< HEAD
            <Linha nome={item.nome} foto={item.foto} profissao={item.profissao} telefone={item.telefone} avaliacao={item.avaliacao} />
=======
            <Linha img={item.img} nome={item.nome} profissao={item.profissao} telefone={item.telefone} avaliacao={item.avaliacao} />
>>>>>>> f14ae3a921df4fc69d0a0193aa2b23c961a109c1
          </TouchableOpacity>
      }
      />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'arial',
  },
});

export default App;