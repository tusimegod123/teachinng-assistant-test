package com.test.medicalcenter.controller;

import com.test.medicalcenter.model.Patient;
import com.test.medicalcenter.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = { "http://localhost:3000" })
@RequestMapping("/api")
public class PatientController {
    @Autowired
    private PatientService patientService;

    @PostMapping("/patient")
    public  void  save(Patient patient){
        patientService.savePatient(patient);
    }
    @GetMapping("/patients")
    public List<Patient> findPatient(){
        return  patientService.getPatients();
    }
    @GetMapping("/elderlypatients")
    public List<Patient> findElderlyPatients(){
        return patientService.getElderlyPatients();
    }
    @GetMapping("/patients/{field}")
    public List<Patient> findSortedPatients(@PathVariable String field){
        return patientService.getSortedPatients(field);
    }
}
