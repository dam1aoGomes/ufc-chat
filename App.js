import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Criando navegador
const Stack = createNativeStackNavigator();

// Tela inicial provisória
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Chat</Text>
      <Text>Selecione um contato para conversar</Text>

      <Button
        title="Conversar com João"
        onPress={() =>
          navigation.navigate('Chat', {
            contatoId: 1,
            contatoNome: 'João',
          })
        }
      />
    </View>
  );
}

// Tela de conversa provisória
function ChatScreen({ route }) {
  const { contatoId, contatoNome } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Conversa com {contatoNome}
      </Text>

      <Text>ID do contato: {contatoId}</Text>
      <Text>Aqui aparecerão as mensagens.</Text>
    </View>
  );
}

// Componente principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Meu Chat' }}
        />

        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ title: 'Conversa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    gap: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#075E54',
  },
});
