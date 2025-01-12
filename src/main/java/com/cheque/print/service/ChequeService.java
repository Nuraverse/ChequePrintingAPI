package com.cheque.print.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cheque.print.dtos.BankDTO;
import com.cheque.print.entity.Cheque;
import com.cheque.print.repository.ChequeRepository;

@Service
public class ChequeService {

    @Autowired
    private ChequeRepository chequeRepository;

    public List<Cheque> findAll() {
        return chequeRepository.findAll();
    }

    public Cheque save(Cheque cheque) {
        Optional<Cheque> existingCheque = this.findByBankName(cheque.getBankName());

        if (existingCheque.isPresent()) {
            // If the cheque exists, update it with the new data
            Cheque chequeToUpdate = existingCheque.get();
            chequeToUpdate.setChequePath(cheque.getChequePath());
            chequeToUpdate.setChequeWidth(cheque.getChequeWidth());
            chequeToUpdate.setChequeHeight(cheque.getChequeHeight());
            chequeToUpdate.setCanvasWidth(cheque.getCanvasWidth());
            chequeToUpdate.setCanvasHeight(cheque.getCanvasHeight());
            chequeToUpdate.setChequeConfigFront(cheque.getChequeConfigFront());
            chequeToUpdate.setChequeConfigBack(cheque.getChequeConfigBack());
            chequeToUpdate.setUpdatedUserId(cheque.getUpdatedUserId());
            chequeToUpdate.setUpdatedBy(cheque.getUpdatedBy());
            chequeToUpdate.setUpdatedDate(cheque.getUpdatedDate());
            chequeToUpdate.setChequeName(cheque.getChequeName());
            chequeToUpdate.setPrintStartPosition(cheque.getPrintStartPosition());
            chequeToUpdate.setTextTopPosition(cheque.getTextTopPosition());

            // Save the updated cheque
            return chequeRepository.save(chequeToUpdate);
        } else {
            return chequeRepository.save(cheque);
        }
    }

    public void deleteById(Long id) {
        chequeRepository.deleteById(id);
    }

    public Optional<Cheque> findById(Long id) {
        return chequeRepository.findById(id);
    }

    public List<BankDTO> getBankNamesAndIds() {
        return chequeRepository.findAllBankNamesAndIds();
    }

    public Optional<Cheque> findByBankName(String bankName) {
        return chequeRepository.findByBankName(bankName);
    }
}
