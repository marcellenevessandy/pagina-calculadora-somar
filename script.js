function somar() {
const numero01 = Number(document.getElementById('numero01').value)
const numero02 = Number(document.getElementById('numero02').value)

const resultado = numero01+numero02;
document.getElementById('resultado').innerText = `RESULTADO: ${resultado}`
}

function limpar(){
    document.getElementById('resultado').innerText = `RESULTADO: ${''}`
    document.getElementById('numero01').value = ``
    document.getElementById('numero02').value = ``
}