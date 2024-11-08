package com.cheque.print.model;

import lombok.Data;

@Data
public class FileUploadResponse {
    private String fileName;
    private String filePath;

    public FileUploadResponse(String fileName, String filePath) {
        this.fileName = fileName;
        this.filePath = filePath;
    }

}
