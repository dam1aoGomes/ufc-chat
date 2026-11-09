
const mensagens = [
  { id: 1, contatoId: 1, texto: 'Olá!', recebida: true },
  { id: 2, contatoId: 2, texto: 'Bom dia!', recebida: true }
];

// Testando a mesma lógica utilizada no Repository
const mensagensJoao = mensagens.filter(
  (mensagem) => mensagem.contatoId === 1
);

console.log('Mensagens de João:', mensagensJoao);

// Testando a adição de mensagens
mensagens.push({
  id: 3,
  contatoId: 1,
  texto: 'Oi, João!',
  recebida: false
});

console.log('Após adicionar:', mensagens);
