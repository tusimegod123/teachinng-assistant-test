package com.test.medicalcenter;

import com.test.medicalcenter.model.Patient;
import com.test.medicalcenter.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class MedicalCenterApplication {
		@Autowired
	private PatientRepository repository;

	@PostConstruct
	public void initPatients() {
		List<Patient> patients = Stream.of(
				new Patient(101L, "P567762", "Tusime Joel", false,"667-667-7080","hhe@gmail.com", LocalDate.of(1950,12,12)),
				new Patient(101L, "P565762", "Moses Joseph", true,"867-667-9980","hhe@gmail.com", LocalDate.of(1953,12,12)),
		new Patient(101L, "P567962", "Zabron Godwin", false,"668-667-9087","hhe@gmail.com", LocalDate.of(1990,12,12)),
		new Patient(101L, "P567763", "Musime Musa", true,"627-667-8089","hhe@gmail.com", LocalDate.of(1999,12,12))
		).collect(Collectors.toList());
		repository.saveAll(patients);
	}
	public static void main(String[] args) {
		SpringApplication.run(MedicalCenterApplication.class, args);


	}

}
