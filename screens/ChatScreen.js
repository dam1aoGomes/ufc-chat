import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function ChatScreen({ route }) {

  // Recupera os parâmetros enviados pela HomeScreen
  const { contatoId, contatoNome } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Conversa com {contatoNome}
      </Text>

      <Text style={styles.info}>
        ID do contato: {contatoId}
      </Text>

      <View style={styles.areaMensagens}>
        <Text style={styles.aviso}>
          Nenhuma mensagem por enquanto.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE5DD',
    padding: 16
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#075E54',
    marginBottom: 10
  },

  info: {
    fontSize: 14,
    color: '#666666'
  },

  areaMensagens: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  aviso: {
    fontSize: 16,
    color: '#888888'
  }
});
