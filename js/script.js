
// 01 - Exemplo

// const regex = /^\d+$/;
// const string1 = "12345";
// const string2 = "abc123";
// const string3 = "987654321"

// console.log(regex.test(string1)); // true
// console.log(regex.test(string2)); // false
// console.log(regex.test(string3)); // true

// 02 - Exemplo

// const regex = /^[A-Za-z]+$/;

// console.log(regex.test("abcd")) // true
// console.log(regex.test("abcd123")) // false

// 03 - Email

// const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
// console.log(regex.test("test@example.com")); // true
// console.log(regex.test("invalid_email")); // false

// Percorrer uma string e encontrar números

// const regex = /\d+/g;
// const string = "Eu tenho 3 maçâs e 5 laranjas.";
// const numeros = string.match(regex);
// console.log(numeros); // ["3", "5"];

const regex = /^(\+55)?\s?(?:\(?\d{2}\)?\s?)?(?:9\s?)?[6-9]\d{3}\s?\-?\d{4}$/;


function verificaNumeroCelular(numero) {
    return regex.test(numero)
}

const numeroTelefone =  prompt("Digite um número de celular no formato brasileiro (ex. 9XXXXXXXXX):00");

const ehValido = verificaNumeroCelular(numeroTelefone);

if (ehValido) {
    console.log("O número é válido.")
} else {
    console.log("O número de celular é inválido.")
}