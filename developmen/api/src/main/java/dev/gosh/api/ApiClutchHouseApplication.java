package dev.gosh.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiClutchHouseApplication {

	public static void main(String[] args) {
		try {
			SpringApplication.run(ApiClutchHouseApplication.class, args);
		} catch (Exception e) {
			System.out.println("Error");
			System.out.println(e.getMessage());
		}
	}

}
