const busca = document.getElementById("buscar");

const produtos = document.querySelectorAll(".produto");

function removerAcento(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

busca.addEventListener("keyup", function () {
  const texto = removerAcento(busca.value.toLowerCase());

  produtos.forEach(function (produto) {
    const nome = removerAcento(produto.innerText.toLowerCase());

    if (nome.includes(texto)) {
      produto.style.display = "block";
    } else {
      produto.style.display = "none";
    }
  });
});
