CalcularIMC = function () {

    if (document.getElementById("peso").value == "")
        alert("Preencha o campo Peso");
    else if (document.getElementById("altura").value == "")
        alert("Preencha o campo Altura");
    else {
        let peso = parseFloat(document.getElementById("peso").value);
        let altura = parseFloat(document.getElementById("altura").value);

        let imc = peso / (altura * altura);
        
        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso.';
        } else if (imc < 25) {
            classificacao = 'Peso ideal';
        } else if (imc < 30) {
            classificacao = 'Levemente acima do peso.';
        } else if (imc < 35) {
            classificacao = 'Obesidade grau 1.';
        } else if (imc < 40) {
            classificacao = 'Obesidade grau 2';
        } else {
            classificacao = 'Obesidade grau 3';
        }

        document.getElementById("resultado").value = "ICM "+imc.toFixed() + " = " + classificacao   
        document.getElementById("resultado").hidden = false;
       
    }
}
