package com.cheque.print.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cheque.print.entity.AgreementView;
import com.cheque.print.repository.AgreementViewRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AgreementViewService {

    @Autowired
    private AgreementViewRepository agreementViewRepository;

    public List<AgreementView> getAllAgreements() {
        return agreementViewRepository.findAll();
    }

    public Optional<AgreementView> getAgreementInfoByAgreementNo(Long agreementNo) {
        return agreementViewRepository.findByAgreementNo(agreementNo);
    }
}
