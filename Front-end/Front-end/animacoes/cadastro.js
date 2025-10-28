const form = document.getElementById("formPagamento")

form.addEventListener('submit' , (event) => {
    event.preventDefault();

    const tipo = document.getElementById("tipo").value
    const nomeCliente = document.getElementById("nomeCliente").value
    const descricao = document.getElementById("descricao").value
    const valor = parseFloat(document.getElementById("valor").value)
    const data = document.getElementById("dataPagamento").value

    const dados = {
        tipo: tipo,
        nomeCliente: nomeCliente,
        descricao: descricao,
        dataPagamento: data,
        valor: valor
    }

    fetch("http://localhost:8080/pagamentos", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        console.log(response.ok);
        const mensagem = document.getElementById("mensagem")
        //informando se a requisição foi realizada com sucesso ou deu erro!
        if (response.ok){
            mensagem.innerHTML = "Dados Cadastrados com Sucesso";
            mensagem.classList.add("text-sucess");
            mensagem.classList.remove("text-danger");
            form.reset();
        }else{
            mensagem.innerHTML = "Erro ao Cadastrar pagamento";
            form.reset();
            mensagem.classList.add("text-danger");
            mensagem.classList.remove("text-danger");
        }
        //capturando a mensagem de erro
    }).catch (error =>{
        const mensagem = document.getElementById("mensagem")
        mensagem.innerHTML = "Erro na requisição" + error.message;
        mensagem.classList.add("text-danger");
        mensagem.classList.remove("text-sucess");
    })
    
})