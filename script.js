document.querySelector("#tipo_convertor").addEventListener("change", e => {
  const select = e.target;
  var tipoConversor = select.value;
  selecionaConversor(tipoConversor)
}) 

function selecionaConversor(tipoConversor) {
  if (tipoConversor == "temperatura") {
    document.getElementById("comprimento").style.display = "none";
    document.getElementById("peso").style.display = "none";
    document.getElementById("temperatura").style.display = "block";
    document.getElementById("instrucoes").style.display = "block";
  }

  if (tipoConversor == "peso") {
    document.getElementById("comprimento").style.display = "none";
    document.getElementById("temperatura").style.display = "none";
    document.getElementById("peso").style.display = "block";
    document.getElementById("instrucoes").style.display = "block";
  }

  if (tipoConversor == "comprimento") {
    document.getElementById("peso").style.display = "none";
    document.getElementById("temperatura").style.display = "none";
    document.getElementById("comprimento").style.display = "block";
    document.getElementById("instrucoes").style.display = "block";
  }
}

document.querySelector("#formPeso").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const entries = Object.fromEntries(data);
  var select1 = entries["select_de"];
  var select2 = entries["select_para"];
  if (validaCampos(select1, select2)) {
    const valor = document.getElementById("numero_converter").value;
    if (select1 == "quilogramas") {
      convertorQuilogramas(select2, valor);
    } else if (select1 == "gramas") {
      convertorGramas(select2, valor);
    } else if (select1 == "libras") {
      convertorLibras(select2, valor);}
  } else {
    alert("Os campos precisam ser selecionados e não podem ser iguais!");
  }
});

document.querySelector("#formComprimento").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const entries = Object.fromEntries(data);
  var select1 = entries["select_de"];
  var select2 = entries["select_para"];
  if (validaCampos(select1, select2)) {
    const valor = document.getElementById("numero_converter").value;
    if (select1 == "metros") {
      convertorMetros(select2, valor);
    } else if (select1 == "centimetros") {
      convertorCentimetros(select2, valor);
    }else if (select1 == "polegadas") {
      convertorPolegadas(select2, valor);
    }
  } else {
    alert("Os campos precisam ser selecionados e não podem ser iguais!");
  }
});

document.querySelector("#formTemperatura").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const entries = Object.fromEntries(data);
  var select1 = entries["select_de"];
  var select2 = entries["select_para"];
  if (validaCampos(select1, select2)) {
    const valor = document.getElementById("numero_converter").value;
    if (select1 == "kelvin") {
      convertorKelvin(select2, valor);
    } else if (select1 == "celsius") {
      convertorCelsius(select2, valor);
    }else if (select1 == "fahrenheit") {
      convertorFahrenheit(select2, valor);
    }
  } else {
    alert("Os campos precisam ser selecionados e não podem ser iguais!");
  }
});

function validaCampos(select1, select2) {
  console.log(select1, select2);
  if (select1 == select2) {
    return false;
  } else if (select1 == "vazio" || select2 == "vazio") {
    return false;
  // } else if{ 
  }else {
    return true;
  }
}



//FUNÇÕES DE CONVERSÃO DE ***PESO***
function convertorQuilogramas(select2, valor) {
  if (select2 == "gramas") {
    document.getElementById("valor_conta").value = valor * 1000;
  } else if (select2 == "libras") {
    document.getElementById("valor_conta").value = valor * 2.20462;
  }
}

function convertorGramas(select2, valor) {
  if (select2 == "quilogramas") {
    document.getElementById("valor_conta").value = valor / 1000;
  } else if (select2 == "libras") {
    document.getElementById("valor_conta").value = valor / 453.6;
  }
}

function convertorLibras(select2, valor) {
  if (select2 == "quilogramas") {
    document.getElementById("valor_conta").value = valor / 2.20462;
  } else if (select2 == "gramas") {
    document.getElementById("valor_conta").value = valor * 453.6;
  }
}

//FUNÇÕES DE CONVERSÃO DE ***TEMPERATURA***
function convertorKelvin(select2, valor) {
  if (select2 == "fahrenheit") {
  document.getElementById("valor_conta").value = (valor - 273.15) * 9/5 + 32;
} else if (select2 == "celsuis") {
  document.getElementById("valor_conta").value = valor - 273.15;
}}

function convertorCelsius(select2, valor) {
  if (select2 == "fahrenheit") {
  document.getElementById("valor_conta").value = (valor * 9/5) + 32;
  }else if (select2 == "kelvin") {
  document.getElementById("valor_conta").value = valor + 273.15;
}}

function convertorFahrenheit(select2, valor) {
  if (select2 == "kelvin") {
  document.getElementById("valor_conta").value = (valor - 32) * 5/9 + 273.15;
}else if (select2 == "celsius") {
  document.getElementById("valor_conta").value = (valor - 32) * 5/9;
}}

//FUNÇÕES DE CONVERSÃO DE ***COMPRIMENTO***
function convertorMetros(select2, valor) {
  if (select2 == "centimetros") {
  document.getElementById("valor_conta").value = valor * 100;
}else if (select2 == "polegadas") {
  document.getElementById("valor_conta").value =  valor * 39.37;
}}

function convertorCentimetros(select2, valor) {
  if (select2 == "metros") {
  document.getElementById("valor_conta").value = valor / 100;
}else if (select2 == "polegadas") {
  document.getElementById("valor_conta").value = valor / 2.54;
}}

function convertorPolegadas(select2, valor) {
  if (select2 == "centimetros") {
  document.getElementById("valor_conta").value = valor * 2.54;
}else if (select2 == "metros") {
  document.getElementById("valor_conta").value = valor / 39.37;
}}

var instrucoes = document.getElementById("instrucoes");
var tipo_convertor = document.getElementById("tipo_convertor");

// tipo_convertor.addEventListener('click', function(){
//     instrucoes.textContent = 'Novo valor inserido';
//   });

