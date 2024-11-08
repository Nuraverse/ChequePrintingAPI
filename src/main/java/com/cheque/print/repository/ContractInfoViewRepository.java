package com.cheque.print.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cheque.print.entity.ContractInfoView;

@Repository
public interface ContractInfoViewRepository extends JpaRepository<ContractInfoView, Long> {

    Optional<ContractInfoView> findByContractId(String contractId);
}
