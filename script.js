let display = document.getElementById("display");

function adicionar(valor) {
  if (display.innerText === "0") {
    display.innerText = valor;
  } else {
    display.innerText += valor;
  }
}

function limpar() {
  display.innerText = "0";
}

function calcular() {
  try {
    let expressao = display.innerText.replace(",", ".");

    expressao = expressao.replace(/(\d+)([+\-*/])(\d+)%/g, (_, a, op, b) => {
      return `${a}${op}(${a}*${b}/100)`;
    });

    expressao = expressao.replace(/(\d+)%/g, (_, b) => {
      return `(${b}/100)`;
    });

    let resultado = eval(expressao);
    display.innerText = resultado;

  } catch {
    display.innerText = "Erro";
  }
}
