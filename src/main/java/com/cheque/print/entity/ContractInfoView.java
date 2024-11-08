package com.cheque.print.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.sql.Date;

import org.hibernate.annotations.Immutable;

@Entity
@Immutable // Ensures the entity is treated as read-only
@Table(name = "CONTRACT_INFO_VIEW")
@Data
public class ContractInfoView {

    @Id
    private Long id;

    private String contractId;
    private Date periodStartDate;
    private Double periodStartAmount;
    private Date periodEndDate;
    private Double periodEndAmount;
    private Integer numberOfInstallment;

    public ContractInfoView(Long id, String contractId, Date periodStartDate, Double periodStartAmount,
            Date periodEndDate, Double periodEndAmount, Integer numberOfInstallment) {
        this.id = id;
        this.contractId = contractId;
        this.periodStartDate = periodStartDate;
        this.periodStartAmount = periodStartAmount;
        this.periodEndDate = periodEndDate;
        this.periodEndAmount = periodEndAmount;
        this.numberOfInstallment = numberOfInstallment;
    }

    public ContractInfoView() {

    }
}
