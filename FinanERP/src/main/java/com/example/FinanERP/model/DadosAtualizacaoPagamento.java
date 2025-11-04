package com.example.FinanERP.model;


import java.time.LocalDate;

public record DadosAtualizacaoPagamento(
        Long id,
        String nomeCliente,
        double valor,
        LocalDate dataPagamento,
        String descricao
) {

}
