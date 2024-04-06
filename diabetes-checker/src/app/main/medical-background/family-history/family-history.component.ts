import { Component, OnInit } from '@angular/core';
import { FamilyHistory } from '../models/family-history';
import { MatDialog } from '@angular/material/dialog';
import { FamilyHistoryService } from '../services/family-history.service';

@Component({
  selector: 'app-family-history',
  templateUrl: './family-history.component.html',
  styleUrls: ['./family-history.component.css']
})
export class FamilyHistoryComponent implements OnInit {

  dataSource!: Array<FamilyHistory>;
  displayedColumns = ['S.No.', 'Relation', 'Type', 'Actions']



  /**
   *
   */
  constructor(private dialog: MatDialog,
    private familyHistoryService: FamilyHistoryService) {

  }


  ngOnInit(): void {
    this.getHistory();
  }

  getHistory() {
    this.familyHistoryService.getHistory().subscribe({
      next: (res) => {
        console.log("res", res);
        this.dataSource = res;
      }
    })
  }

  openDialog(title: string, id: string | undefined): void {
    const dialogRef = this.dialog.open(FamilyHistoryComponent, {
      data: { title: 'add-family-history', key: id },
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.getHistory();
    });
  }

  deleteHistory(id: string) {
    this.familyHistoryService.deleteHistory(id).subscribe({
      next: (res) => {
        console.log("res", res);
        alert('delete successful');
        this.getHistory();
      }
    })
  }


}
