import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../services/common-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private commonService: CommonDataService) { }

  diaStatus: string = "yes";

  menu1: any = [
    {
      title: "Introduction",
      route: " "
    },
    {
      title:"Diabetes Status",
      route: " "
    },
    {
      title: "Current Symptoms",
      route: ""
    },
    {
      title: "Blood Sugar Tests",
      route: " ",
    },
    {
      title: "Diabetes Complications",
      route: " "
    }
    , {
      title: "Past Medications",
      route: " "
    }

  ]

  currMenu: any = this.menu1;
  activeGroupNum:number= 0;


  ngOnInit(): void {

    this.commonService.getDiaStatus.subscribe({
      next: (res) => {
        console.log("status update", res);
      }
    });

    this.commonService.getActiveGrpNum.subscribe({
      next:(res)=>{
        this.activeGroupNum=res;
        console.log("this.activeGroupNum=",
        this.activeGroupNum);
        
      }
    })


  }

}
