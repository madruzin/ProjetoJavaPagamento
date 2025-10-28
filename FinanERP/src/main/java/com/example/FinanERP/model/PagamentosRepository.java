package com.example.FinanERP.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PagamentosRepository extends JpaRepository<Pagamento, Long> {
    List<Pagamento> findByTipo(Tipo tipo);
}
