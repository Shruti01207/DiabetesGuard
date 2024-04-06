import { Component, OnInit } from '@angular/core';
import { MedicalConditionsService } from '../services/medical-conditions.service';
import { MedicalCondition } from '../models/medical-condition';
import { MatDialog } from '@angular/material/dialog';
import { MedicalConditionsDialogComponent } from '../medical-conditions-dialog/medical-conditions-dialog.component';

@Component({
  selector: 'app-medical-conditions',
  templateUrl: './medical-conditions.component.html',
  styleUrls: ['./medical-conditions.component.css']
})
export class MedicalConditionsComponent implements OnInit {

 
  displayedColumns: string[] = ['S.No.', 'Diagnosed Date', 'Disease', 'Actions'];

  medicalConditions: MedicalCondition[] = [];

 

  constructor( private medicalConditionsService: MedicalConditionsService,
    private dialog:MatDialog) {
    
    
  }

  ngOnInit(): void {
  this.getMedicalConditions( );
  }

  getMedicalConditions() {
    this.medicalConditionsService.getCondition()
      .subscribe(
        {
          next: (res) => {
            console.log("res", res);
            this.medicalConditions = res;
          }
        }
      )
  }


  openDialog(title: string, id: string | undefined): void {
    const dialogRef = this.dialog.open(MedicalConditionsDialogComponent, {
      data: { title: title, key: id },
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.getMedicalConditions( );
    });
  }

  deleteComplication(id:string){
    this.medicalConditionsService.deleteCondition(id).subscribe({
      next:(res)=>{
        alert("delete successfully");
        this.getMedicalConditions( );
      }
    })
   }


}
