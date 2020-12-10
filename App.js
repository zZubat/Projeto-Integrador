import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View, Text} from 'react-native';
import Linha from './components/Linha';
import {Header} from 'react-native-elements';
import api from './api';

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
      <FlatList
        data={profissionais}
        keyExtractor={(item)=> item.key.toString()}
        renderItem={ ({item}) => 
          <TouchableOpacity>
            <Linha nome={item.nome} foto={item.foto} profissao={item.profissao} telefone={item.telefone} avaliacao={item.avaliacao} />
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