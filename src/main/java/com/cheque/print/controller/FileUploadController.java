package com.cheque.print.controller;

import com.cheque.print.model.FileUploadResponse;
import com.cheque.print.service.FileStorageService;

import jakarta.annotation.PostConstruct;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/upload")
@CrossOrigin(origins = "*")
public class FileUploadController {

    private static final Logger logger = LoggerFactory.getLogger(FileUploadController.class);

    private final FileStorageService fileStorageService;

    public FileUploadController(FileStorageService fileStorageService) {
        this.fileStorageService = fileStorageService;
    }

    @PostConstruct
    public void init() {
        try {
            fileStorageService.initUploadDirectory();
        } catch (IOException e) {
            logger.error("Failed to initialize upload directory: {}", e.getMessage());
            throw new RuntimeException("Could not initialize storage directory");
        }
    }

    @PostMapping
    public ResponseEntity<FileUploadResponse> handleFileUpload(
            @RequestParam("file") MultipartFile file,
            @RequestParam("customFileName") String customFileName) {

        if (file.isEmpty()) {
            logger.error("Uploaded file is empty");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new FileUploadResponse("File is empty", null));
        }

        try {
            // Extract the original file name to get the extension
            String originalFileName = file.getOriginalFilename();
            String fileExtension = "";

            // Check if originalFileName is not null before extracting the extension
            if (originalFileName != null && originalFileName.contains(".")) {
                fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
            }

            // Append the file extension to the custom file name
            String finalFileName = customFileName + fileExtension;

            // Store the file using the final filename
            String savedFilePath = fileStorageService.storeFile(file, finalFileName);
            logger.info("File uploaded successfully: {}", finalFileName);
            return ResponseEntity.ok(new FileUploadResponse(finalFileName, savedFilePath));

        } catch (IOException e) {
            logger.error("File upload failed: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new FileUploadResponse("File upload failed", null));
        }
    }

    @GetMapping("/files/{fileName:.+}")
    public ResponseEntity<byte[]> getFile(@PathVariable String fileName) {
        try {
            // Get the file as a byte array from the file storage service
            byte[] fileBytes = fileStorageService.getFileAsBytes(fileName);

            if (fileBytes != null) {
                // Set the content type based on the file extension
                String contentType = Files.probeContentType(Paths.get(fileName));
                return ResponseEntity.ok()
                        .contentType(MediaType.parseMediaType(contentType))
                        .body(fileBytes);
            } else {
                logger.error("File not found: {}", fileName);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        } catch (IOException e) {
            logger.error("Error retrieving file: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
