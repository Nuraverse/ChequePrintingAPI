package com.cheque.print.entity;

import lombok.Data;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "CHEQUE")
@Data // Lombok annotation to generate getters, setters, and other methods
public class Cheque {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cheque_seq")
    @SequenceGenerator(name = "cheque_seq", sequenceName = "cheque_seq", allocationSize = 1)
    private Long id;

    @Column(name = "cheque_name")
    private String chequeName;

    @Column(name = "bank_name")
    private String bankName;

    @Column(name = "cheque_path")
    private String chequePath;

    @Column(name = "cheque_width")
    private Double chequeWidth;

    @Column(name = "cheque_height")
    private Double chequeHeight;

    @Column(name = "print_start_position")
    private Double printStartPosition;

    @Column(name = "canvas_width")
    private Double canvasWidth;

    @Column(name = "canvas_height")
    private Double canvasHeight;

    @Lob
    @Column(name = "cheque_config_front")
    private String chequeConfigFront;

    @Lob
    @Column(name = "cheque_config_back")
    private String chequeConfigBack;

    @Column(name = "created_user_id")
    private Long createdUserId;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "created_date")
    private Timestamp createdDate;

    @Column(name = "updated_user_id")
    private Long updatedUserId;

    @Column(name = "updated_by")
    private String updatedBy;

    @Column(name = "updated_date")
    private Timestamp updatedDate;

    // No-argument constructor is optional but can be added for clarity
    public Cheque() {
    }

    // All-arguments constructor for easy instantiation
    public Cheque(Long id, String chequeName, String bankName, String chequePath, Double chequeWidth,
            Double chequeHeight,
            Double canvasWidth, Double canvasHeight, String periodsConfig,
            String chequeConfigFront, String chequeConfigBack, Long createdUserId,
            String createdBy, Timestamp createdDate, Long updatedUserId,
            String updatedBy, Timestamp updatedDate, Double printStartPosition) {
        this.id = id;
        this.chequeName = chequeName;
        this.bankName = bankName;
        this.chequePath = chequePath;
        this.chequeWidth = chequeWidth;
        this.chequeHeight = chequeHeight;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.chequeConfigFront = chequeConfigFront;
        this.chequeConfigBack = chequeConfigBack;
        this.createdUserId = createdUserId;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.updatedUserId = updatedUserId;
        this.updatedBy = updatedBy;
        this.updatedDate = updatedDate;
        this.printStartPosition = printStartPosition;
    }
}
