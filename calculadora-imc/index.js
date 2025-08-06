function calcularimc() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        document.getElementById('classificacao').innerHTML = `
            <p style="color:red;">Por favor, insira valores válidos para peso e altura.</p>
        `;
        return;
    }

    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    const imcFormatado = imc.toFixed(2);
    
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade";
    } else {
        classificacao = "Obesidade Grave";
    }

    document.getElementById('classificacao').innerHTML = `
        <h3>Resultados:</h3>
        <p>Seu IMC é: ${imcFormatado}</p>
        <p>Classificação: ${classificacao}</p>
    `;
}
