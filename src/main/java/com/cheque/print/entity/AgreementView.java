package com.cheque.print.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.sql.Date;

import org.hibernate.annotations.Immutable;

@Entity
@Immutable // Ensures the entity is treated as read-only
@Table(name = "AGREEMENT_VIEW")
@Data
public class AgreementView {

    @Id
    private Long agreementNo;
    private Date firstInstallmentDate;
    private Date lastInstallmentDate;
    private Double firstInstallmentAmount;
    private Double lastInstallmentAmount;
    private Integer numberOfInstallment;
    private String frequency;

    public AgreementView(Long agreementNo, Date firstInstallmentDate, Date lastInstallmentDate,
            Double firstInstallmentAmount, Double lastInstallmentAmount, Integer numberOfInstallment,
            String frequency) {
        this.agreementNo = agreementNo;
        this.firstInstallmentDate = firstInstallmentDate;
        this.lastInstallmentDate = lastInstallmentDate;
        this.firstInstallmentAmount = firstInstallmentAmount;
        this.lastInstallmentAmount = lastInstallmentAmount;
        this.frequency = frequency;
        this.numberOfInstallment = numberOfInstallment;
    }

    public AgreementView() {

    }
}
