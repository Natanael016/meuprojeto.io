const fs = require("fs");

const categorias = [
  "eletronicos",
  "gadgets",
  "casa",
  "carro",
  "cozinha",
  "tecnologia",
];

const nomes = [
  "Mini Projetor Portátil",
  "Relógio Masculino Luxo",
  "Fone Bluetooth Sem Fio",
  "Lâmpada LED Inteligente",
  "Carregador Turbo USB",
  "Organizador de Cabos",
  "Suporte para Celular Carro",
  "Caixa de Som Bluetooth",
  "Mouse Gamer RGB",
  "Teclado Mecânico Gamer",
];

function gerarProduto(i) {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];

  const categoria = categorias[Math.floor(Math.random() * categorias.length)];

  const preco = (Math.random() * 200 + 20).toFixed(2);

  const imagem = "https://picsum.photos/300?random=" + i;

  return {
    nome: nome,
    preco: preco,
    categoria: categoria,
    imagem: imagem,
    link: "https://shopee.com.br",
  };
}

const produtos = [];

for (let i = 1; i <= 20; i++) {
  produtos.push(gerarProduto(i));
}

fs.writeFileSync("produtos.json", JSON.stringify(produtos, null, 2));

console.log("200 produtos gerados com sucesso");
