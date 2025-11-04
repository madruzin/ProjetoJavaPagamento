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

    //resetar a tabela 
    tabelaPagamentos.innerHTML=""
    let pagamento = dados[0]

    dados.forEach(pagamento => {
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
    
        //Botão de Editar
        let btnEditar =document.createElement("button")
        btnEditar.textContent= "Editar"
        btnEditar.className = "btn-editar"
        btnEditar.dataset.id = pagamento.id

        btnEditar.addEventListener("click", ()=>{
            abrirFormulario(pagamento, linhaPagamento)
        })
    
        //Botão de excluir
        let btnExcluir =document.createElement("button")
        btnExcluir.textContent= "Excluir"
        btnExcluir.className = "btn-excluir"
        btnExcluir.dataset.id = pagamento.id

        btnExcluir.addEventListener("click", ()=>{
            excluirPagamento(pagamento.id)
        })
       
        //criar o td ações
        let acoes= document.createElement("td")
        acoes.appendChild(btnEditar)
        acoes.appendChild(btnExcluir)
    
        
    
        //informa que os TD são filhos do TR
        linhaPagamento.appendChild(tipoPagamentoTd)
        linhaPagamento.appendChild(nomeCliente)
        linhaPagamento.appendChild(descricao)
        linhaPagamento.appendChild(data)
        linhaPagamento.appendChild(valor)
        linhaPagamento.appendChild(acoes)
    
        //informa que o TR é filho da tabela
        tabelaPagamentos.appendChild(linhaPagamento)
        
    });

   
function excluirPagamento(id){
    if(confirm("Tem certeza que deseja excluir o pagamento? ")){
        fetch(`http://localhost:8080/pagamentos/${id}` , {
            method: "DELETE"
        }).then(res => {
            if(res.ok){
                alert("PAGAMENTO EXCLUÍDO COM SUCESSO")
                buscaPagamentos()
            }else{
                alert("ERRO AO EXCLUIR")
            }
        }).catch(error =>{
            alert("ERrO AO CONECTAR")
        })
    }
}


}
//Editar pagamento
function abrirFormulario(pagamento, linha){
    let formEdicao = document.getElementById("formEdicao")
    formEdicao.style.display ="block"

    //Move o formulario para logo abaixo da linha Clicada
    linha.insertAdjacentElement("afterend" , formEdicao)

    document.getElementById("editId").value = pagamento.id
    document.getElementById("editNome").value = pagamento.nomeCliente
    document.getElementById("editDescricao").value = pagamento.descricao
    document.getElementById("editValor").value = pagamento.valor
    document.getElementById("editData").value = pagamento.dataPagamento
}

function cancelarEdicao(){
    let formEdicao = document.getElementById("formEdicao")
    formEdicao.style.display ="none"

}