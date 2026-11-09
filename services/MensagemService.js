import MensagemRepository from '../repositories/MensagemRepository';

class MensagemService {

  constructor() {

    // Cria uma instância do Repository
    this.repository = new MensagemRepository();

    // Inicia o contador após o maior ID existente
    this.proximoId = this.repository.getMaiorId() + 1;

  }

  // Consulta as mensagens de um contato
  getMensagens(contatoId) {

    return this.repository.getMensagens(contatoId);

  }

  // Valida, cria e armazena uma mensagem
  enviarMensagem(contatoId, texto) {

    // Impede mensagens vazias ou inválidas
    if (
      typeof texto !== 'string' ||
      !texto.trim()
    ) {
      return false;
    }

    // Cria uma nova mensagem
    const novaMensagem = {

      id: this.proximoId,

      contatoId: contatoId,

      texto: texto.trim(),

      recebida: false

    };

    // Armazena a mensagem no Repository
    this.repository.adicionarMensagem(novaMensagem);

    // Atualiza o próximo ID
    this.proximoId++;

    return true;

  }

}

// Instância única compartilhada
const mensagemService = new MensagemService();

export default mensagemService;
