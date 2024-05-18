

const lafeter = document.querySelector('.oi')
const addi = document.querySelector('.adicionar')
const la = document.getElementById('bi')
const email = document.getElementById('email')
const div = document.createElement('div'); //adiciona um elemento nao existente
const divisor = document.createElement('div');
const body = document.querySelector('body')
const botao = document.querySelector('button')
 
lafeter.textContent = 'hi, how are you?'  //manipula o texo do html
lafeter.innerHTML = 'manipula o html' + '<h1>ola mundo<h1>' //manipula ou adiciona um novo html
email.value = "111111"    //manipula o valor do input
email.style.color = 'red' //manipula o stilo
email.classList.add('adicionar') //adiciona uma class não existente e se colocar remove no lugar de add ele remove a class
div.innerHTML = 'div criada'
divisor.innerHTML = 'Apenas siga em frente'

body.append(div) //adiciona  elemento div depois dos outros elementos
la.append(divisor)//adiciona o elemento não existente antes do id bi


function ci() {
    lafeter.style.color = 'blue'
    addi.style.color = 'blue'
    console.log("funcionou +||-")
}

function og() {
   la.style.color = 'red' 
}


onkeydown = function rodo() {  //se eu precionar qulquer tecla ira mudar de cor para preto
    la.style.color = 'black'
}

la.onmouseover = og //execulta eventos no js é a mesma coisa q colocar eventos no htmls

console.log(lafeter)
console.log(la)












