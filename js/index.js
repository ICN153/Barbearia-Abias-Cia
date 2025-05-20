document.addEventListener("DOMContentLoaded", function () {
  const botaoAgendar = document.querySelector(".ag__corte");
  const modal = document.getElementById("modal-agendar");
  const botaoFechar = document.getElementById("fechar-modal");

  botaoAgendar.addEventListener("click", () => {
    modal.classList.add("ativo");
  });

  botaoFechar.addEventListener("click", () => {
    modal.classList.remove("ativo");
  });
});
const botoes = document.querySelectorAll('.servico-btn');
const detalhes = document.getElementById('detalhes-servico');
const titulo = document.getElementById('titulo-servico');
const descricao = document.getElementById('descricao-servico');
const voltarBtn = document.getElementById('voltar-btn');

const servicos = {
  "Corte Tradicional": {
    preco: "R$ 40,00",
    duracao: "30 minutos"
  },
  "Limpeza de Rosto": {
    preco: "R$ 60,00",
    duracao: "45 minutos"
  },
  "Sobrancelha": {
    preco: "R$ 25,00",
    duracao: "20 minutos"
  }
};

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const servicoSelecionado = botao.getAttribute('data-servico');
    const info = servicos[servicoSelecionado];

    // Oculta os botões
    botoes.forEach(btn => btn.classList.add('hidden'));

    // Exibe os detalhes
    titulo.textContent = servicoSelecionado;
    descricao.textContent = `Preço: ${info.preco} | Duração: ${info.duracao}`;
    detalhes.classList.add('ativo');
  });
});

// Função para voltar
voltarBtn.addEventListener('click', () => {
  detalhes.classList.remove('ativo');
  botoes.forEach(btn => btn.classList.remove('hidden'));
});
