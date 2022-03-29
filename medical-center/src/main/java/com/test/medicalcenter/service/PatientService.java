package com.test.medicalcenter.service;

import com.test.medicalcenter.model.Patient;
import com.test.medicalcenter.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientService {
    @Autowired
    PatientRepository patientRepository;

    public  void savePatient(Patient  patient){
        patientRepository.save(patient);
    }

    public List<Patient> getPatients(){
        return patientRepository.findAll();
    }
    public List<Patient> getElderlyPatients(){
        List<Patient> patients =  patientRepository.findAll();
        return patients.stream().filter(patient -> Period.between(patient.getDateOfBirth(), LocalDate.now()).getYears() >= 65)
                .collect(Collectors.toList());
    }

    public  List<Patient> getSortedPatients( String  string){
        return patientRepository.findAll(Sort.by(Sort.Direction.ASC, string));
    }

    public  void  deletePatient(Patient patient){
        patientRepository.delete(patient);
    }

}
