
import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function Mensagem({ mensagem, recebida }) {

  return (
    <View
      style={[
        styles.container,
        recebida ? styles.recebida : styles.enviada
      ]}
    >

      <Text style={styles.texto}>
        {mensagem}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 12,
    marginVertical: 5,
    borderRadius: 12,
    maxWidth: '80%'
  },

  recebida: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF'
  },

  enviada: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6'
  },

  texto: {
    fontSize: 16,
    color: '#222222'
  }

});
