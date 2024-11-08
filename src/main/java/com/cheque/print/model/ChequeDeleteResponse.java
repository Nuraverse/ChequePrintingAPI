package com.cheque.print.model;

import lombok.Data;

@Data
public class ChequeDeleteResponse {

    public ChequeDeleteResponse(String message) {
        this.message = message;
    }

    private String message;
}