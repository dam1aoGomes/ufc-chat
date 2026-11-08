import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';

// Criando navegador
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Meu Chat',
            headerStyle: {
              backgroundColor: '#075E54'
            },
            headerTintColor: '#FFFFFF'
          }}
        />

        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ route }) => ({
            title: route.params.contatoNome,
            headerStyle: {
              backgroundColor: '#075E54'
            },
            headerTintColor: '#FFFFFF'
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
