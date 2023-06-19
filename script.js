function selecionaConversor(tipoConversor) {
  if (tipoConversor == "temperatura") {
    document.getElementById("comprimento").style.display = "none";
    document.getElementById("peso").style.display = "none";
    document.getElementById("temperatura").style.display = "block";
  }

  if (tipoConversor == "peso") {
    document.getElementById("comprimento").style.display = "none";
    document.getElementById("temperatura").style.display = "none";
    document.getElementById("peso").style.display = "block";
  }

  if (tipoConversor == "comprimento") {
    document.getElementById("peso").style.display = "none";
    document.getElementById("temperatura").style.display = "none";
    document.getElementById("comprimento").style.display = "block";
  }
}

function convertorQuilogramas(valor) {
    document.getElementById("gramas").value = valor * 1000;
    document.getElementById("libras").value = valor * 2.20462;
}

function convertorGramas(valor) {
    document.getElementById("quilogramas").value = valor / 1000;
    document.getElementById("libras").value = valor / 453.6;
}

function convertorLibras(valor) {
    document.getElementById("quilogramas").value = valor / 2.20462;
    document.getElementById("gramas").value = valor * 453.6;
}