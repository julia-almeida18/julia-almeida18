function olamundo(){
alert("Hello world!!");
}

function nome(){
    let nome = prompt("Olá,insira seu nome no campo abaixo:")

    alert("Olá " + nome + "! É um prazer te conhecer.");
}

function somar(){
    let n1 = Number(window.prompt ('Digite um número:'))
    let n2 = Number(window.prompt ('Digite um número:'))

    soma = n1 + n2

    //let resultado = document.getElementById("resultado").innerHTML = n1 + n2
    window.alert (n1 + n2);
    resultado.innerHTML = `<p>A soma entre <mark>${n1}</mark> e
    <mark>${n2}</mark> é igual a <strong>${soma}</strong>!</p>`

}
