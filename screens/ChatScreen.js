
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

import Mensagem from '../components/Mensagem';

export default function ChatScreen({ route }) {
  const { contatoId, contatoNome } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Conversa com {contatoNome}
      </Text>

      <Text style={styles.info}>
        ID do contato: {contatoId}
      </Text>

      <ScrollView style={styles.areaMensagens}>
        <Mensagem
          mensagem="Olá! Tudo bem?"
          recebida={true}
        />

        <Mensagem
          mensagem="Oi! Tudo ótimo, e você?"
          recebida={false}
        />

        <Mensagem
          mensagem="Tudo bem também!"
          recebida={true}
        />

        <Mensagem
          mensagem="Que bom!"
          recebida={false}
        />
      </ScrollView>

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
    color: '#666666',
    marginBottom: 15
  },

  areaMensagens: {
    flex: 1
  }
});
