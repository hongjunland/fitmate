package com.fitmate.backend.controller;

import com.fitmate.backend.service.S3Uploader;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class FileController {
    private final S3Uploader s3Uploader;

    @PostMapping("/images")
    public ResponseEntity<?> upload(@RequestParam("images") MultipartFile multipartFile) throws IOException {
        return ResponseEntity.ok(s3Uploader.upload(multipartFile, "static"));
    }
}
