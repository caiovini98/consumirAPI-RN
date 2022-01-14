import React, {useState} from 'react';
import type {ReactNode} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {FilmesModel} from '../../models/filmes';

export default (props: FilmesModel): React.ReactElement<FilmesModel> => {
  const {nome, descricao, foto} = props;
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View>
      <Text style={styles.nomeFilme}>{nome}</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={{uri: foto}} style={styles.capaFilme} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View style={styles.containerModal}>
            <Text>{descricao}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  nomeFilme: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  capaFilme: {
    width: 120,
    height: 150,
    borderRadius: 30,
    alignSelf: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  containerModal: {
    margin: 20,
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

// export default Filmes;
