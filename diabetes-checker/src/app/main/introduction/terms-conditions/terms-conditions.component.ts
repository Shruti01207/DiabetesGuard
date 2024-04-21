import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonDataService } from '../../services/common-data.service';


@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements OnInit {

  constructor(private toastr: ToastrService,
    private commonData: CommonDataService
  ) { }

  conditions: Array<boolean> = [false, false];
  id: number = 2;
  ngOnInit(): void {
  

   const conditionsStrings = sessionStorage.getItem("terms-condition");
   
   if(conditionsStrings)
   this.conditions=conditionsStrings.split(",").map(val => val.toLowerCase() === "true"); 
  
    this.commonData.getValidationEvent((this.id - 1)).subscribe({
      next: (res) => {
        console.log("t&c called", (this.id - 1), res);
        this.Save();
      }
    })

  }




  valueChanged() {
    console.log(this.conditions[0], this.conditions[1]);

    if (this.conditions[0] && this.conditions[1]) {
      this.commonData.setTermsConditionAccepted(true);
    }
    else {
      this.commonData.setTermsConditionAccepted(false);
    }
  }


  Save() {
    if (this.conditions[0] && this.conditions[1]) {
      this.commonData.formValid = true;
      sessionStorage.setItem("terms-condition", this.conditions.toString());
    }

  }


}
