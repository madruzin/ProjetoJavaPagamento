package com.example.FinanERP.model;

import java.time.LocalDate;

public record DadosCadastroPagamento(

        Tipo tipo, //Entrada ou Saida
        String nomeCliente,
        TipoSaida tipoSaida,
        double valor,
        LocalDate dataPagamento,
        String descricao
) {

}
