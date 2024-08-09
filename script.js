var randomnumber = 0;
var tentativas = 0;

function checkrandom() {
    var elemento = document.getElementById('inputNumero').value

    elemento = ''

    randomnumber = parseInt(Math.random() * 101)

    console.log('Número: ' + randomnumber);
}

checkrandom();

function verifynumber() {
    var numero = document.getElementById('inputNumero').value

    if(numero > 100 || numero < 0) {
        alert('Aposta inválida.')
        return;

    } if (numero > randomnumber) {
        tentativas++;
        alert('O numero a ser encontrado é MENOR!')
    } else if (numero < randomnumber) {
        tentativas++;
        alert('O número a ser encontrado é MAIOR!')
    } else {
        alert(`Parabéns, você acertou em ${tentativas} tentativas!`)
    }
}