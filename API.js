




















// Defina sua chave de API Spoonacular
const apiKey = '63b3dc01037f4911ade0af2512f747d5';

//pesquisando
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const resultadoPesquisa = document.getElementById('resultadoPesquisa');

  searchButton.addEventListener('click', function() {
    const termoDePesquisa = searchInput.value.trim(); // Obter o texto da barra de pesquisa e remover espaços em branco extras

    if (termoDePesquisa) {
      // Fazer solicitação GET para a API com o termo de pesquisa
      const url = `https://api.spoonacular.com/food/products/search?query=${termoDePesquisa}&apiKey=${apiKey}`;

      axios.get(url)
        .then(response => {
          // Limpar o resultado anterior
          resultadoPesquisa.innerHTML = '';

          // Exibir os resultados da pesquisa
          const produtos = response.data.products;
          produtos.forEach(produto => {
            const produtoElement = document.createElement('div');
            produtoElement.textContent = produto.title;
            resultadoPesquisa.appendChild(produtoElement);
          });
        })
        .catch(error => {
          console.error('Erro:', error);
        });
    } else {
      // Se o termo de pesquisa estiver vazio, exibir uma mensagem de erro
      resultadoPesquisa.textContent = 'Por favor, insira um termo de pesquisa válido.';
    }
  });
});
