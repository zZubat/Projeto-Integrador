import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View} from 'react-native';
import Linha from './components/Linha';
import {Header} from 'react-native-elements';

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

const App = () => {
  return( 

    <View>
      <Header
          backgroundColor= '#000'
          leftComponent={{ icon: 'menu', color: '#fff' }}
          rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <FlatList
        data={dados}
        keyExtractor={(item)=> item.key.toString()}
        renderItem={ ({item}) => 
          <TouchableOpacity>
            <Linha img={item.img} nome={item.nome} profissao={item.profissao} telefone={item.telefone} avaliacao={item.avaliacao} />
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