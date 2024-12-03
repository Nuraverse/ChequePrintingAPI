package com.cheque.print.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cheque.print.entity.AgreementView;

@Repository
public interface AgreementViewRepository extends JpaRepository<AgreementView, Long> {

    Optional<AgreementView> findByAgreementNo(Long agreementNo);
}
