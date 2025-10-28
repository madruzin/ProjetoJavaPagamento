package com.example.FinanERP.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

//Anotação para identificar a tabela aonde os dados serão salvos
@Table(name = "pagamentos")
@Entity (name = "Pagamento")
@EqualsAndHashCode(of = "id")

public class Pagamento {



    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private Tipo tipo;
    private String nomeCliente;
    private double valor;
    private LocalDate dataPagamento;
    private String descricao;


    public Pagamento(DadosCadastroPagamento pagamento) {
        this.tipo = pagamento.tipo();
        this.nomeCliente = pagamento.nomeCliente();
        this.valor = pagamento.valor();
        this.dataPagamento = pagamento.dataPagamento();
        this.descricao = pagamento.descricao();
    }

    public Long getId() {
        return id;
    }

    public Tipo getTipo() {
        return tipo;
    }

    public String getNomeCliente() {
        return nomeCliente;
    }

    public double getValor() {
        return valor;
    }

    public LocalDate getDataPagamento() {
        return dataPagamento;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTipo(Tipo tipo) {
        this.tipo = tipo;
    }

    public void setNomeCliente(String nomeCliente) {
        this.nomeCliente = nomeCliente;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public void setDataPagamento(LocalDate dataPagamento) {
        this.dataPagamento = dataPagamento;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Pagamento() {
    }
}
