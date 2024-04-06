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
  ngOnInit(): void {

  }



  msg() {
    this.toastr.info("hello!");
  }

  valueChanged() {
     console.log(this.conditions[0],this.conditions[1]);
     
    if (this.conditions[0] && this.conditions[1]) {
      this.commonData.setTermsConditionAccepted(true);
    }
    else {
      this.commonData.setTermsConditionAccepted(false);
    }
  }


}
