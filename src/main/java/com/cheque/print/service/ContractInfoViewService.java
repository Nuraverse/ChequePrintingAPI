package com.cheque.print.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cheque.print.entity.ContractInfoView;
import com.cheque.print.repository.ContractInfoViewRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ContractInfoViewService {

    @Autowired
    private ContractInfoViewRepository contractInfoViewRepository;

    public List<ContractInfoView> getAllContracts() {
        return contractInfoViewRepository.findAll();
    }

    public Optional<ContractInfoView> getContractInfoByContractId(String contractId) {
        return contractInfoViewRepository.findByContractId(contractId);
    }
}
