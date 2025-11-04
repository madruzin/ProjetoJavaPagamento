function salvarEdicao(){
    const id = document.querySelector("#editId").value 
    const nomeCliente = document.querySelector("#editNome").value 
    const descricao= document.querySelector("#editDescricao").value 
    const data= document.querySelector("#editData").value 
    const valor = parseFloat(document.querySelector("#editValor").value )

    const dadosAtualizados = {
        id: id,
        nomeCliente: nomeCliente,
        descricao: descricao,
        valor: valor,
        dataPagamento: data
    }
  
    fetch ("http://localhost:8080/pagamentos" , {
        method:"PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(dadosAtualizados)
    }) .then(res => {
        if (res.ok){
            alert("REGISTRO SALVO COM SUCESSO")
            document.querySelector("#formEdicao").style.display = "none" //fecha o formulario de ediição
            buscaPagamentos() // Chama a função que exibe as informação de pagamento
        } else{
            alert("ERRO AO ATUALIZAR")
        }
    }) .catch( error =>{
        alert ("Erro na comunicação com o servidor")
    })
}