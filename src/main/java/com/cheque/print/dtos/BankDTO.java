package com.cheque.print.dtos;

import lombok.Data;

@Data
public class BankDTO {
    private Long id; // Add this field
    private String bankName;

    // Constructor to initialize fields
    public BankDTO(Long id, String bankName) {
        this.id = id;
        this.bankName = bankName;
    }
}
