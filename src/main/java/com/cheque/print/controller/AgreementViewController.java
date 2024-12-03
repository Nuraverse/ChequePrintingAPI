package com.cheque.print.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cheque.print.entity.AgreementView;
import com.cheque.print.service.AgreementViewService;

import java.util.List;

@RestController
@RequestMapping("/api/contracts")
@CrossOrigin(origins = "*")
public class AgreementViewController {

    @Autowired
    private AgreementViewService agreementViewService;

    @GetMapping("v1/view")
    public List<AgreementView> getAllAgreements() {
        return agreementViewService.getAllAgreements();
    }

    @GetMapping("v1/view/{agreementNo}")
    public ResponseEntity<AgreementView> getAgreementInfoByAgreementNo(@PathVariable Long agreementNo) {

        return agreementViewService.getAgreementInfoByAgreementNo(agreementNo)
                .map(contractInfoView -> ResponseEntity.ok(contractInfoView)) // Return 200 OK with the contract info
                .orElse(ResponseEntity.ok(new AgreementView())); // Return 200 OK with empty JSON object
    }
}
