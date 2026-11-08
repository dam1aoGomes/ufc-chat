import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';

// Lista de contatos fictícios
const contatos = [
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Maria' },
  { id: 3, nome: 'Pedro' },
  { id: 4, nome: 'Ana' }
];

export default function HomeScreen({ navigation }) {

  // Abre a conversa do contato selecionado
  function abrirConversa(contato) {
    navigation.navigate('Chat', {
      contatoId: contato.id,
      contatoNome: contato.nome
    });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Contatos</Text>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contato}
            onPress={() => abrirConversa(item)}
          >
            <View style={styles.avatar}>
              <Text style={styles.inicial}>
                {item.nome.charAt(0)}
              </Text>
            </View>

            <Text style={styles.nome}>
              {item.nome}
            </Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#075E54'
  },

  contato: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE'
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#075E54',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },

  inicial: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold'
  },

  nome: {
    fontSize: 18,
    color: '#222222'
  }
});
