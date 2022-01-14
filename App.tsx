import React, {useState, useEffect} from 'react';
import type {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList} from 'react-native';
import api from './src/services/api';
import Filmes from './src/pages/Filmes';
import {FilmesModel} from './src/models/filmes';

const App: () => ReactNode = () => {
  const [filmes, setFilmes] = useState<FilmesModel[]>([]);

  const getFilmes = async () => {
    try {
      const response = await api.get('/filmes');
      setFilmes(response.data);
    } catch (e) {
      console.log('erro: ', e);
    }
  };

  useEffect(() => {
    getFilmes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Filmes
            nome={item.nome}
            descricao={item.descricao}
            foto={item.foto}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
