// INÍCIO DO JAVASCRIPT
// ligando JavaScript com o formulário Html
const form = document.getElementById("form-atividade");

// cria arrys
const atividades = []; // cria um array vazio para armazenar os nomes das atividade informadas pelo usuário
const notas = []; // cria um array vazio para armazenar as notas informadas pelo usuário.

// vincula a variável imgAprovado ao arquivo imagens e à imagem aprovado.png
const imgAprovado = `<img src="./images/aprovado.png" alt= "imoji celebrando" />`;
// vincula a variável imgReprovado ao aRquivo imagens e a imagem reprovado.png
const imgReprovado = '<img src="./images/reprovado.png" alt="imoji decepcionado" />';

// cria a variável global vazia linhas que vai receber a variável local linha dentro da função addEventListener
let linhas = '';

// span
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = parseFloat(prompt('Digite a nota mínima: '));

// cria o "ouvinte" quando o botão for clicado
form.addEventListener('submit', function(e) {
   // O NOmE "function" não é necessário acima

   // PREVINE ERROS NO FORmULÁRIO
   e.preventDefault();

   adicionaLinha(); // chama a função adiciona linha
   atualizaTabela(); // chama a função atualiza tabela
   atualizaMediaFinal(); // chaMa a função atualiza Média Final

}) // FIm DA FUNÇÃO ADDEVENTLISTENER; retorna para o início.

function adicionaLinha() 
{
   const inputNomeAtividade = document.getElementById('nome-atividade');
   const inputNotaAtividade = document.getElementById('nota-atividade');

   if(atividades.includes(inputNomeAtividade.value)) {
      alert(`A atividade: ${inputNomeAtividade.value} já foi inserida.`);
   } else {

      // array atividades recebe as strings digitadas pelo usuário no campo inputNomeAtividade
      atividades.push(inputNomeAtividade.value); 
      
      // array notas recebe os valores das notas digitadas pelo usuário no campo inputNotaAtividade
      notas.push(parseFloat(inputNotaAtividade.value));

      // declara a variável linha
      let linha = `<tr>`; // abre a linha da tabela 
      
      // RECEBE VALORES
      linha += `<td>${inputNomeAtividade.value}</td>`; // recebe o nome da atividade informado pelo usuário
      linha += `<td>${inputNotaAtividade.value}</td>`; // recebe a nota informada

      // CONDIÇÃO
      linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}`; // compara a nota informada se é maior ou igual a 7, se verdade exibe aprovado se não exibe reprovado
      
      linha += `</tr>`; // fecha a lina da tabela

      // variável globsl linhas recebe a variável linha
      linhas += linha;      
   } // fim else

   // Limpa os campos
   inputNomeAtividade.value = ''; // nome da atividade
   inputNotaAtividade.value = ''; // e nota 

   inputNomeAtividade.focus(); // após retorna o focu para o campo nome da atvidade

} // fim da função adicionaLinha

// cria a função atualizaTabela
function atualizaTabela()
{
   // LIGAÇÃO JAVASCRIPT COm O HTmL
   // variável JS liga-se a tag tbody do formulário
   const corpoTabela = document.querySelector("tbody");
   corpoTabela.innerHTML = linhas; // exibe no corpo da tabela o contúdo dos dados informados pelo usuário.

} // fim da função atualizaTabela

// cria a função atualiza média final
function atualizaMediaFinal()
{
   // declara variável que recebe o resultado da função calcula média final
   const mediaFinal = calculaMediaFinal();

   document.getElementById('media-final-valor').innerHTML = mediaFinal;
   document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

   console.log(mediaFinal);

} // fiM da função atualiza Média final

// cria a função calcula Média Final
function calculaMediaFinal()
{
   // declara variável
   let somaDasNotas = 0;

   // loop para calcular a soma das notas
   for(let i = 0; i < notas.length; i++) {
      // soma das notas recebe 
      somaDasNotas += notas[i]; 
   } // fim for

   // retorna somaDasNotas dividido pela quantidade das notas
   return somaDasNotas / notas.length;

} // fim função calcula média final