import { Component, OnInit } from '@angular/core';
import { DiagnoseHistory } from '../models/diagnose-history';
import { MatDialog } from '@angular/material/dialog';
import { DiagnosisHistoryService } from '../services/diagnosis-history.service';
import { DiagnosisHistoryDialogComponent } from '../diagnosis-history-dialog/diagnosis-history-dialog.component';

@Component({
  selector: 'app-diagnosis-history',
  templateUrl: './diagnosis-history.component.html',
  styleUrls: ['./diagnosis-history.component.css']
})
export class DiagnosisHistoryComponent implements OnInit {

  dataSource!:Array<DiagnoseHistory>;
  displayedColumns = ['S.No.','Diagnosed Date','Past Symptoms','Past Medications','Actions']

  

  
  constructor(private dialog : MatDialog,
  private diagnosisHistoryService: DiagnosisHistoryService) {
  
    
  }


  ngOnInit(): void {
    this.getHistory( );
  }

  getHistory() {
    this.diagnosisHistoryService.getDiagnosisHistory( ).subscribe({
      next: (res) => {
        console.log("res", res);
        this.dataSource = res;
      }
    })
  }

  openDialog(title: string, id: string | undefined): void {
    const dialogRef = this.dialog.open(DiagnosisHistoryDialogComponent, {
      data: { title: 'add-family-history', key: id },
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.getHistory( );
    });
  }

  
}
