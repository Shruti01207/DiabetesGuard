import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diabetes-management',
  templateUrl: './diabetes-management.component.html',
  styleUrls: ['./diabetes-management.component.css']
})
export class DiabetesManagementComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {

  
    const bloodTestValues= JSON.parse(sessionStorage.getItem("bloodTest") as string);
    console.log("bloodTestValues=",bloodTestValues);

    const complications= JSON.parse(sessionStorage.getItem("complications") as string)
    console.log("complications=",complications);


   
  



  }

}
