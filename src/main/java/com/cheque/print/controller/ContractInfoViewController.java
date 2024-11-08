package com.cheque.print.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cheque.print.entity.ContractInfoView;
import com.cheque.print.service.ContractInfoViewService;

import java.util.List;

@RestController
@RequestMapping("/api/contracts")
@CrossOrigin(origins = "*")
public class ContractInfoViewController {

    @Autowired
    private ContractInfoViewService contractInfoViewService;

    @GetMapping("v1/view")
    public List<ContractInfoView> getAllContracts() {
        return contractInfoViewService.getAllContracts();
    }

    @GetMapping("v1/view/{contractId}")
    public ResponseEntity<ContractInfoView> getContractInfoByContractId(@PathVariable String contractId) {

        return contractInfoViewService.getContractInfoByContractId(contractId)
                .map(contractInfoView -> ResponseEntity.ok(contractInfoView)) // Return 200 OK with the contract info
                .orElse(ResponseEntity.ok(new ContractInfoView())); // Return 200 OK with empty JSON object
    }
}
