import { Component, OnInit } from '@angular/core';
import { MedicalCondition } from '../../medical-background/models/medical-condition';
import { MedicalConditionsService } from '../../medical-background/services/medical-conditions.service';
import { MatDialog } from '@angular/material/dialog';
import { MedicalConditionsDialogComponent } from '../../medical-background/medical-conditions-dialog/medical-conditions-dialog.component';
import { AddMedicationDialogComponent } from '../add-medication-dialog/add-medication-dialog.component';
import { MedicationService } from '../services/medication.service';
import {  AuthService } from 'src/app/auth/services/auth.service';
import { medicineData } from '../models/medicineDataApi';
import { CommonDataService } from '../../services/common-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-past-medications',
  templateUrl: './past-medications.component.html',
  styleUrls: ['./past-medications.component.css']
})
export class PastMedicationsComponent implements OnInit {

  displayedColumns: string[] = ['S.No.', 'Diagnosed Date', 'Disease', 'Actions'];

  medicalConditions: MedicalCondition[] = [];
  pastMedications?:medicineData[];
 

  constructor( private medicalConditionsService: MedicalConditionsService,
    private dialog:MatDialog, 
    private medicineService:MedicationService,
    private auth: AuthService,
    private commonService: CommonDataService,
    private toastrService:ToastrService) {
    
     
  }

  ngOnInit(): void {
    this.commonService.formValid=true;
    this.getMedicines( );
  }

  getMedicines() {
    this.medicineService.getMedicinesByPatientId(this.auth.patientId)
    .subscribe({
     next:(res)=>{
       console.log("result=",res);
       this.pastMedications=res as medicineData[];
     }
    })
  }


  openDialog(title: string, id: string | undefined): void {
    const dialogRef = this.dialog.open(AddMedicationDialogComponent, {
      data: { title: title, key: id },
      height: '600px',
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.getMedicines( );
    });
  }

  deleteComplication(id:string){
    this.medicineService.deleteById(id).
    subscribe({
      next:(res)=>{
       this.toastrService.success("Prescription deleted successfully!");
       this.getMedicines( );  
      }
    })
   }



}
