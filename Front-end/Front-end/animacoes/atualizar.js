function salvarEdicao(){
    const id = document.querySelector("editId").value 
    const nomeCliente = document.querySelector("#editNome").value 
    const descricao= document.querySelector("#editDescricao").value 
    const data= document.querySelector("#editData").value 
    const valor = parseFloat(document.querySelector("editValor")).value 

    const dadosAtualizados = {
        id: id,
        nomeCliente: nomeCliente,
        descricao: descricao,
        valor: valor,
        dataPagamento: data
    }
    console.log(dadosAtualizados);
}