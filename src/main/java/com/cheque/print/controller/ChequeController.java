package com.cheque.print.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cheque.print.dtos.BankDTO;
import com.cheque.print.entity.Cheque;
import com.cheque.print.model.ChequeDeleteResponse;
import com.cheque.print.service.ChequeService;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cheques")
@CrossOrigin(origins = "*")
public class ChequeController {

    @Autowired
    private ChequeService chequeService;

    @GetMapping("/v1/all")
    public List<Cheque> getAllCheques() {
        return chequeService.findAll();
    }

    @GetMapping("/v1/{id}")
    public Optional<Cheque> getChequeById(@PathVariable Long id) {
        return chequeService.findById(id);
    }

    @PostMapping("/v1/save")
    public Cheque createOrUpdateCheque(@RequestBody Cheque cheque) {
        return chequeService.save(cheque);
    }

    @PutMapping("/v1/{id}")
    public Cheque updateCheque(@PathVariable Long id, @RequestBody Cheque cheque) {
        cheque.setId(id);
        return chequeService.save(cheque);
    }

    @DeleteMapping("/v1/{id}")
    public ResponseEntity<ChequeDeleteResponse> deleteCheque(@PathVariable Long id) {
        chequeService.deleteById(id);
        ChequeDeleteResponse responseMessage = new ChequeDeleteResponse("Cheque has been deleted successfully.");
        return ResponseEntity.ok(responseMessage);
    }

    @GetMapping("/v1/banks")
    public List<BankDTO> getAllBankNames() throws SQLException {
        return chequeService.getBankNamesAndIds();
    }
}
