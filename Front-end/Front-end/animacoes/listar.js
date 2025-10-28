function buscaPagamentos(){
    const tipoPagamento = document.getElementById("filtroTipo").value
    fetch(`http://localhost:8080/pagamentos/tipo/${tipoPagamento}`)
    .then (res=> res.json())
    .then (dados => {
        console.log(dados)
        exibePagamentos(dados);

    })
}

let tabelaPagamentos = document.getElementById("tabelaPagamentos")

//função para retornar ao filtrar o tipo:entrada ou saida
function exibePagamentos(dados){
    let pagamento = dados[0]
    //cria os elementos da tabela
    let linhaPagamento = document.createElement("tr")
    let tipoPagamentoTd= document.createElement("td")
    let nomeCliente= document.createElement("td")
    let descricao= document.createElement("td")
    let data= document.createElement("td")
    let valor= document.createElement("td")
    //adiciona as informações nas tag em HTML a partir do JSON retornado da API
    tipoPagamentoTd.textContent= pagamento.tipo
    nomeCliente.textContent= pagamento.nomeCliente
    descricao.textContent= pagamento.descricao
    data.textContent= pagamento.dataPagamento
    valor.textContent= "R$" + parseFloat(pagamento.valor).toFixed(2)

    //informa que os TD são filhos do TR
    linhaPagamento.appendChild(tipoPagamentoTd)
    linhaPagamento.appendChild(nomeCliente)
    linhaPagamento.appendChild(descricao)
    linhaPagamento.appendChild(data)
    linhaPagamento.appendChild(valor)

    //informa que o TR é filho da tabela
    tabelaPagamentos.appendChild(linhaPagamento)


}