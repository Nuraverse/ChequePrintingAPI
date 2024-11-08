package com.cheque.print;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.cheque.print.repository")
public class ChequePrintingApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChequePrintingApplication.class, args);
	}

}
