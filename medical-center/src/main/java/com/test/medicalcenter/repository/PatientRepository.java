package com.test.medicalcenter.repository;

import com.test.medicalcenter.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository  extends JpaRepository<Patient, Long> {
}
