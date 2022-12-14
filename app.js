let click = document.querySelector('#iCalcula')
click.addEventListener('click', insereProduto)

function insereProduto() {
    let nomeP = document.querySelector('#iNome').value
    let valorP = document.querySelector('#iVal').value
    tabela = document.querySelector('#iCelula')
    let produto = {
        nome: nomeP,
        valor: valorP,
        valorReal: calculaDolar(valorP).toFixed(2),
        valorImposto: calculaImposto(valorP).toFixed(2)
    }
    tabela.innerHTML = "<td>" + produto.nome + "</td>" + "<td><b>U$</b>" + produto.valor + "</td>" + "<td><b>R$</b>" + produto.valorReal + "</td>" + "<td><b>R$</b>" + produto.valorImposto + "</td>"

}
function calculaDolar(valorProduto) {
    let cotacao = document.querySelector('#iCot').value
    let converteDolar = parseFloat(valorProduto * cotacao)
    return converteDolar
}
function calculaImposto(valorProduto) {
    let valorDolar = calculaDolar(valorProduto)
    let imposto = document.querySelector('#iImp').value
    let converteImposto = parseFloat(((valorDolar * imposto) / 100) + valorDolar)
    return converteImposto
}