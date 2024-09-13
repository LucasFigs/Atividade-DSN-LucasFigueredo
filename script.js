const moedas = [
  { "nome": "Dólar Americano", "valor_em_dolar": 1.00 },
  { "nome": "Euro", "valor_em_dolar": 1.12 },
  { "nome": "Libra Esterlina", "valor_em_dolar": 1.38 },
  { "nome": "Iene Japonês", "valor_em_dolar": 0.0092 },
  { "nome": "Real Brasileiro", "valor_em_dolar": 0.1777 },
  { "nome": "Dólar Canadense", "valor_em_dolar": 0.80 },
  { "nome": "Dólar Australiano", "valor_em_dolar": 0.76 },
  { "nome": "Franco Suíço", "valor_em_dolar": 1.08 },
  { "nome": "Peso Mexicano", "valor_em_dolar": 0.05 },
  { "nome": "Yuan Chinês", "valor_em_dolar": 0.16 },
  { "nome": "Coroa Sueca", "valor_em_dolar": 0.12 },
  { "nome": "Won Sul-Coreano", "valor_em_dolar": 0.00089 },
  { "nome": "Dólar de Hong Kong", "valor_em_dolar": 0.13 },
  { "nome": "Dólar de Cingapura", "valor_em_dolar": 0.74 },
  { "nome": "Dólar Neozelandês", "valor_em_dolar": 0.71 },
  { "nome": "Rupia Indiana", "valor_em_dolar": 0.014 },
  { "nome": "Rublo Russo", "valor_em_dolar": 0.013 },
  { "nome": "Baht Tailandês", "valor_em_dolar": 0.032 },
  { "nome": "Lira Turca", "valor_em_dolar": 0.12 },
  { "nome": "Rand Sul-Africano", "valor_em_dolar": 0.066 },
  { "nome": "Peso Filipino", "valor_em_dolar": 0.021 },
  { "nome": "Forint Húngaro", "valor_em_dolar": 0.0033 },
  { "nome": "Kuna Croata", "valor_em_dolar": 0.16 },
  { "nome": "Peso Colombiano", "valor_em_dolar": 0.00028 },
  { "nome": "Dirham dos Emirados Árabes Unidos", "valor_em_dolar": 0.27 },
  { "nome": "Peso Chileno", "valor_em_dolar": 0.0013 },
  { "nome": "Novo Shekel Israelense", "valor_em_dolar": 0.30 },
  { "nome": "Dólar de Taiwan", "valor_em_dolar": 0.036 },
  { "nome": "Dinar Kuwaitiano", "valor_em_dolar": 3.28 },
  { "nome": "Ringgit Malaio", "valor_em_dolar": 0.24 },
  { "nome": "Lev Búlgaro", "valor_em_dolar": 0.60 },
  { "nome": "Zloti Polonês", "valor_em_dolar": 0.25 },
  { "nome": "Rial Saudita", "valor_em_dolar": 0.27 },
  { "nome": "Coroa Norueguesa", "valor_em_dolar": 0.11 },
  { "nome": "Dólar Jamaicano", "valor_em_dolar": 0.0065 },
  { "nome": "Dólar das Bahamas", "valor_em_dolar": 1.00 },
  { "nome": "Rial Iraniano", "valor_em_dolar": 0.000024 },
  { "nome": "Peso Argentino", "valor_em_dolar": 0.010 },
  { "nome": "Bolívar Venezuelano", "valor_em_dolar": 0.000025 },
  { "nome": "Rupia Indonésia", "valor_em_dolar": 0.000069 },
  { "nome": "Pula do Botswana", "valor_em_dolar": 0.087 },
  { "nome": "Lira Libanesa", "valor_em_dolar": 0.00066 },
  { "nome": "Dólar do Suriname", "valor_em_dolar": 0.011 },
  { "nome": "Quetzal Guatemalteco", "valor_em_dolar": 0.13 },
  { "nome": "Dinar do Bahrein", "valor_em_dolar": 2.65 },
  { "nome": "Dólar de Trinidad e Tobago", "valor_em_dolar": 0.15 },
  { "nome": "Rúpia Paquistanesa", "valor_em_dolar": 0.0064 },
  { "nome": "Dinar Iraquiano", "valor_em_dolar": 0.00068 },
  { "nome": "Dólar do Zimbábue", "valor_em_dolar": 0.0028 },
  { "nome": "Dólar do Brunei", "valor_em_dolar": 0.74 }
];




// preenchendo as opções do select
function preencherSelect(idElemento) {
  // capturando o <select>
  const selectMoedas = document.getElementById(idElemento);

  // limpando o que tiver de opções
  selectMoedas.innerHTML = '';

  // itera o array moedas criando um elemnto option para cada objeto do array com o conteúdo do nome do objeto
  moedas.forEach(moeda => {
    const option = document.createElement('option'); // cria o elemento option
    option.textContent = moeda.nome; // define o valor interno do option
    selectMoedas.appendChild(option); // adiciona esse elemento no elemento pai (selectmoedas)
  });
}

function selectSelectors() {
  const selectors = document.getElementsByName('selectMoeda');
  selectors.forEach(selector => {
    console.log(selector.id)
    preencherSelect(selector.id)
  })
}

window.addEventListener('DOMContentLoaded', selectSelectors); //chama a função toda vez que a tela é carregada


// função de converter o valor
function converterValor() {
  const valorAConverter = parseFloat(document.getElementById('valor').value.replace(/,/g,'.')); // captura valor digitado e converte em número
  console.log(valorAConverter);

  const moedaOrigemIndex = document.getElementById('moedaOrigem').selectedIndex; // capitura o index da moeda de origem selecionada

  const valorMoedaOrigemEmDolar = moedas[moedaOrigemIndex].valor_em_dolar; //busca o valor da moeda de origem selecionada em dolar a partir do índice

  const valorOrigemEmDolar = valorMoedaOrigemEmDolar * valorAConverter; //calcula a conversão


  const moedaDestinoIndex = document.getElementById('moedaDestino').selectedIndex; // capitura o index da moeda de destino selecionada
  const valorMoedaDestinoEmDolar = moedas[moedaDestinoIndex].valor_em_dolar; //busca o valor da moeda destino selecionada em dolar a partir do índice

  const valorFinal = valorOrigemEmDolar/valorMoedaDestinoEmDolar;

  document.getElementById('resultado').textContent = `O valor em Dolar é U$${valorFinal.toFixed(2)}`; // retorna o valor final



}