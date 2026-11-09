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

      <Text style={styles.titulo}>
        Contatos
      </Text>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listaContatos}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contato}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={`Abrir conversa com ${item.nome}`}
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
    paddingHorizontal: 16,
    paddingTop: 16
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 14,
    color: '#075E54'
  },

  listaContatos: {
    paddingBottom: 10
  },

  contato: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE'
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
