let operacao = "";
let resultado = document.getElementById("resultado");
let operacaoTexto = document.getElementById("operacao");

function adicionar(valor) {
  operacao += valor;
  operacaoTexto.innerText = operacao;
}

function limpar() {
  operacao = "";
  operacaoTexto.innerText = "";
  resultado.innerText = "0";
}

function calcular() {
  try {
    let expressao = display.innerText;

    expressao = expressao.replace(/,/g, ".");

    expressao = expressao.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

    let resultado = eval(expressao);

    display.innerText = resultado;
  } catch {
    display.innerText = "Erro";
  }
}

function inverter() {
  if (operacao) {
    operacao = (-eval(operacao)).toString();
    operacaoTexto.innerText = operacao;
  }
}
