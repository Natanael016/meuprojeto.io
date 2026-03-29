const fs = require("fs");

const produtos = [];

for (let i = 1; i <= 50; i++) {
  produtos.push({
    nome: "Produto Shopee " + i,
    preco: (Math.random() * 100).toFixed(2),
    categoria: "eletronico",
    imagem: "https://via.placeholder.com/300",
    link: "https://shopee.com.br",
  });
}

fs.writeFileSync("produtos.json", JSON.stringify(produtos, null, 2));

console.log("produtos.json gerado com sucesso");
