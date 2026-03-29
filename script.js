const container = document.getElementById("produtos");
const busca = document.getElementById("buscar");
const botoes = document.querySelectorAll(".categorias button");

let produtos = [];

async function carregarProdutos() {
  const resposta = await fetch("produtos.json");

  produtos = await resposta.json();

  mostrarProdutos(produtos);
}

function mostrarProdutos(lista) {
  container.innerHTML = "";

  lista.forEach((produto) => {
    container.innerHTML += `

<div class="produto" data-cat="${produto.categoria}">

<img src="${produto.imagem}">

<h3>${produto.nome}</h3>

<p>R$ ${produto.preco}</p>

<a href="${produto.link}" target="_blank">

<button>Comprar na Shopee</button>

</a>

</div>

`;
  });
}

carregarProdutos();

busca.addEventListener("keyup", () => {
  const texto = busca.value.toLowerCase();

  const filtrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(texto),
  );

  mostrarProdutos(filtrados);
});

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const categoria = botao.dataset.cat;

    if (categoria === "todos") {
      mostrarProdutos(produtos);
    } else {
      const filtrados = produtos.filter((p) => p.categoria === categoria);

      mostrarProdutos(filtrados);
    }
  });
});
