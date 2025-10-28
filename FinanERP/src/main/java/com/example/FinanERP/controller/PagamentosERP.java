package com.example.FinanERP.controller;

import com.example.FinanERP.model.DadosCadastroPagamento;
import com.example.FinanERP.model.Pagamento;
import com.example.FinanERP.model.PagamentosRepository;
import com.example.FinanERP.model.Tipo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/pagamentos")
public class PagamentosERP {

    @Autowired
    private PagamentosRepository pagamentosRepository;

    @PostMapping
    public void cadastrarPagamentos(@RequestBody DadosCadastroPagamento pagamento) {
        pagamentosRepository.save(new Pagamento(pagamento));
    }

    @GetMapping
    public List<Pagamento> listarPagamentos() {
        return pagamentosRepository.findAll();
    }

    @GetMapping("/tipo/{tipo}")
    public List<Pagamento> listarPagamentosPorTipo(@PathVariable Tipo tipo) {
        return pagamentosRepository.findByTipo(tipo);

    }
}
