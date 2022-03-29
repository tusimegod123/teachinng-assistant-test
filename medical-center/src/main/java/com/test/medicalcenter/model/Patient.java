package com.test.medicalcenter.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import java.time.LocalDate;

@Data
@Entity
public class Patient {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
   private long  patientId;

    @Column(unique = true)
    @NotNull
    private String patientNumber; //REQUIRED, Unique (e.g. P1000001, EP1000002, EP1000003 etc.)

    @NotNull
    private boolean isAnOutPatient; // REQUIRED (values: “Yes” or “No”)

    @NotNull
  private String   fullNames; // REQUIRED (e.g. John H. Smith, Ann-Marie Washington, Diego A. Ortiz etc.)

    private  String emailAddress; // OPTIONAL (e.g. jhsmith@globalmail.net, awashington@hcmc.org, etc.)

    private String contactPhoneNumber; // OPTIONAL (e.g. (641) 001-0012, (641) 002-0034, etc.)

    @NotNull(message = "The date of birth is required.")
    //@BirthDate(message = "The birth date must be greater or equal than 18")
    @Past(message = "The date of birth must be in the past.")
    private LocalDate dateOfBirth;  // REQUIRED (e.g. 1959-5-21, 1949-12-3, etc.)


    public Patient(long l, String patientNumber,  String fullNames,boolean isAnOutPatient, String contactPhoneNumber, String emailAddress, LocalDate dateOfBirth) {
        this.patientId = l;
        this.patientNumber = patientNumber;
        this.fullNames = fullNames;
        this.isAnOutPatient = isAnOutPatient;
        this.contactPhoneNumber =contactPhoneNumber;
        this.emailAddress = emailAddress;
        this.dateOfBirth = dateOfBirth;
    }

    public Patient() {

    }
}
