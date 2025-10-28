function buscaPagamentos(){
    const tipoPagamento = document.getElementById("filtroTipo").value
    fetch(`http://localhost:8080/pagamentos/tipo/${tipoPagamento}`)
    .then (res=> res.json())
    .then (dados => {
        console.log(dados)
    })
}