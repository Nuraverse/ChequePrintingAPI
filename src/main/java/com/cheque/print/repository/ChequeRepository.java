package com.cheque.print.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cheque.print.dtos.BankDTO;
import com.cheque.print.entity.Cheque;

import java.util.List;
import java.util.Optional;

public interface ChequeRepository extends JpaRepository<Cheque, Long> {

    Optional<Cheque> findByBankName(String bankName);

    @Query(value = "SELECT id, bank_name AS bankName FROM CHEQUE order by bank_name asc ", nativeQuery = true)
    List<Object[]> findAllBankNamesAndIdsNative();

    // Alternatively, you can create a method to map to BankDTO
    default List<BankDTO> findAllBankNamesAndIds() {
        List<Object[]> results = findAllBankNamesAndIdsNative();
        return results.stream()
                .map(record -> new BankDTO((Long) record[0], (String) record[1]))
                .toList();
    }

}