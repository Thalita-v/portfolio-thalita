// Função para validar os campos do formulário de contato
function validarFormulario() {
  // Captura os valores dos campos de nome, email e mensagem
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Verifica se algum campo está vazio
  if (!nome || !email || !mensagem) {
    // Mostra alerta para o usuário preencher tudo
    alert('Por favor, preencha todos os campos antes de enviar.');
    return false; // Impede o envio do formulário
  }

  // Mostra mensagem de sucesso (simulação de envio)
  alert('Mensagem enviada com sucesso!');
  return true; // Permite o envio
}

// Script para atualizar o ano automaticamente no rodapé
document.addEventListener("DOMContentLoaded", function() {
  // Obtém o ano atual
  const ano = new Date().getFullYear();

  // Insere o ano no elemento com ID "ano"
  document.getElementById("ano").textContent = ano;
});
