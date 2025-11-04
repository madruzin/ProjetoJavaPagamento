package com.example.FinanERP.controller;

import com.example.FinanERP.model.*;
import jakarta.transaction.Transactional;
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
    //alterar dados no banco de dados
    @PutMapping
    @Transactional
    public void atualizarPagamentos(@RequestBody DadosAtualizacaoPagamento dados) {
        var pagamento = pagamentosRepository.getReferenceById(dados.id());
        pagamento.atualizarInformacoes(dados);
    }
    @DeleteMapping("/{id}")
    @Transactional
    public void excluirPagamento(@PathVariable Long id){
        pagamentosRepository.deleteById(id);

    }
}

