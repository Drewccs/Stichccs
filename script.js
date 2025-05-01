function comprar(produto) {
  let compras = JSON.parse(localStorage.getItem("compras")) || [];
  if (!compras.includes(produto)) {
    compras.push(produto);
    localStorage.setItem("compras", JSON.stringify(compras));
  }
  mostrarCompras();
  mostrarProduto(produto);
}

function mostrarCompras() {
  const compras = JSON.parse(localStorage.getItem("compras")) || [];
  const lista = document.getElementById("compras");
  lista.innerHTML = "";

  compras.forEach(produto => {
    const item = document.createElement("li");
    item.textContent = produto;
    lista.appendChild(item);
  });
}

function mostrarProduto(produto) {
  const entrega = document.getElementById("entrega");
  if (conteudoProdutos[produto]) {
    entrega.innerHTML = conteudoProdutos[produto];
  } else {
    entrega.innerHTML = "<p>Produto não encontrado.</p>";
  }
}

mostrarCompras();
