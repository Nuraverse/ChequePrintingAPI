package com.cheque.print.service;

import com.cheque.print.config.FileStorageProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileStorageService {

    private static final Logger logger = LoggerFactory.getLogger(FileStorageService.class);

    @Autowired
    private final FileStorageProperties fileStorageProperties;

    public FileStorageService(FileStorageProperties fileStorageProperties) {
        this.fileStorageProperties = fileStorageProperties;
    }

    public void initUploadDirectory() throws IOException {
        File dir = new File(fileStorageProperties.getUploadDir());
        if (!dir.exists()) {
            boolean created = dir.mkdirs();
            if (created) {
                logger.info("Upload directory created: {}", fileStorageProperties.getUploadDir());
            } else {
                throw new IOException("Failed to create upload directory: " + fileStorageProperties.getUploadDir());
            }
        }
    }

    public String storeFile(MultipartFile file, String customFileName) throws IOException {

        String uploadDir = fileStorageProperties.getUploadDir();
        File destFile = new File(uploadDir, customFileName != null ? customFileName : file.getOriginalFilename());
        file.transferTo(destFile);

        return destFile.getAbsolutePath();
    }

    public File getFile(String fileName) {
        return new File(fileStorageProperties.getUploadDir(), fileName);
    }

    public byte[] getFileAsBytes(String fileName) throws IOException {
        Path filePath = Paths.get(fileStorageProperties.getUploadDir()).resolve(fileName).normalize();
        return Files.readAllBytes(filePath);
    }
}
