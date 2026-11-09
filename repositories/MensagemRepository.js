
class MensagemRepository {
  constructor() {
    this.mensagens = [
      {
        id: 1,
        contatoId: 1,
        texto: 'Olá! Tudo bem?',
        recebida: true
      },

      {
        id: 2,
        contatoId: 1,
        texto: 'Oi! Tudo ótimo!',
        recebida: false
      },

      {
        id: 3,
        contatoId: 2,
        texto: 'Bom dia!',
        recebida: true
      },

      {
        id: 4,
        contatoId: 3,
        texto: 'Vamos estudar hoje?',
        recebida: true
      },

      {
        id: 5,
        contatoId: 4,
        texto: 'Oi! Como você está?',
        recebida: true
      }

    ];

  }

  getMensagens(contatoId) {

    return this.mensagens.filter(
      (mensagem) => mensagem.contatoId === contatoId
    );

  }

  adicionarMensagem(mensagem) {

    this.mensagens.push(mensagem);

  }

  getMaiorId() {

    return this.mensagens.reduce(
      (maiorId, mensagem) =>
        Math.max(maiorId, mensagem.id),
      0
    );

  }

}

export default MensagemRepository;
