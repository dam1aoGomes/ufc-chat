import React, {
  useState,
  useRef,
  useEffect
} from 'react';

import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Platform
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Mensagem from '../components/Mensagem';
import mensagemService from '../services/MensagemService';

export default function ChatScreen({ route }) {

  const { contatoId, contatoNome } = route.params;

  // Identifica as áreas seguras da tela
  const insets = useSafeAreaInsets();

  // Referência da lista de mensagens
  const listaRef = useRef(null);

  // Estados
  const [texto, setTexto] = useState('');

  const [mensagens, setMensagens] = useState(() =>
    mensagemService.getMensagens(contatoId)
  );

  const [tecladoVisivel, setTecladoVisivel] = useState(false);

  // Detecta quando o teclado aparece ou desaparece
  useEffect(() => {

    const eventoMostrar =
      Platform.OS === 'ios'
        ? 'keyboardWillShow'
        : 'keyboardDidShow';

    const eventoEsconder =
      Platform.OS === 'ios'
        ? 'keyboardWillHide'
        : 'keyboardDidHide';

    const mostrarListener = Keyboard.addListener(
      eventoMostrar,
      () => setTecladoVisivel(true)
    );

    const esconderListener = Keyboard.addListener(
      eventoEsconder,
      () => setTecladoVisivel(false)
    );

    // Remove os listeners quando a tela é desmontada
    return () => {
      mostrarListener.remove();
      esconderListener.remove();
    };

  }, []);

  // Envio de mensagens
  function enviarMensagem() {

    // O Service valida o conteúdo
    const enviada = mensagemService.enviarMensagem(
      contatoId,
      texto
    );

    if (enviada) {

      // Atualiza a lista da conversa atual
      setMensagens(
        mensagemService.getMensagens(contatoId)
      );

      // Limpa o campo de texto
      setTexto('');
    }
  }

  // Verifica se existe texto válido para envio
  const mensagemValida = texto.trim().length > 0;

  return (
    <KeyboardAvoidingView
      style={styles.tecladoContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >

      <View
        style={[
          styles.container,
          {
            paddingBottom: tecladoVisivel
              ? 8
              : Math.max(insets.bottom, 8)
          }
        ]}
      >

        <FlatList
          ref={listaRef}
          style={styles.lista}
          data={mensagens}
          keyExtractor={(item) => item.id.toString()}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.conteudoLista}
          onContentSizeChange={() => {
            listaRef.current?.scrollToEnd({
              animated: true
            });
          }}
          renderItem={({ item }) => (
            <Mensagem
              mensagem={item.texto}
              recebida={item.recebida}
            />
          )}
          ListEmptyComponent={
            <Text style={styles.aviso}>
              Nenhuma mensagem por enquanto.
            </Text>
          }
        />

        <View style={styles.areaEnvio}>

          <TextInput
            style={styles.input}
            placeholder="Digite uma mensagem..."
            placeholderTextColor="#888888"
            value={texto}
            onChangeText={setTexto}
            multiline
            maxLength={1000}
            accessibilityLabel={`Mensagem para ${contatoNome}`}
          />

          <TouchableOpacity
            style={[
              styles.botaoEnviar,
              !mensagemValida &&
                styles.botaoEnviarDesabilitado
            ]}
            activeOpacity={0.7}
            disabled={!mensagemValida}
            accessibilityRole="button"
            accessibilityLabel="Enviar mensagem"
            accessibilityState={{
              disabled: !mensagemValida
            }}
            onPress={enviarMensagem}
          >

            <Text style={styles.textoBotao}>
              Enviar
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  tecladoContainer: {
    flex: 1
  },

  container: {
    flex: 1,
    backgroundColor: '#ECE5DD',
    paddingHorizontal: 12,
    paddingTop: 8
  },

  lista: {
    flex: 1
  },

  conteudoLista: {
    paddingBottom: 4
  },

  aviso: {
    textAlign: 'center',
    color: '#888888',
    marginTop: 30,
    fontSize: 15
  },

  areaEnvio: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 8,
    gap: 8
  },

  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#222222',
    maxHeight: 110,
    minHeight: 48
  },

  botaoEnviar: {
    backgroundColor: '#075E54',
    borderRadius: 24,
    minHeight: 48,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  botaoEnviarDesabilitado: {
    backgroundColor: '#A5B8B4'
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15
  }

});
