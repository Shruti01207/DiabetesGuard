import { Component, OnInit } from '@angular/core';
import { MedicalCondition } from '../models/medical-condition';
import { MatDialog } from '@angular/material/dialog';
import { MedicalConditionsService } from '../services/medical-conditions.service';

@Component({
  selector: 'app-medical-conditions-dialog',
  templateUrl: './medical-conditions-dialog.component.html',
  styleUrls: ['./medical-conditions-dialog.component.css']
})
export class MedicalConditionsDialogComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
