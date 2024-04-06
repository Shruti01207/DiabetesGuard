import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BotService } from '../shared/services/bot.service';
import { CompData } from './medical-background/models/comp-data';
import { CommonDataService } from './services/common-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router,
    private botService: BotService,
    private commonDataService: CommonDataService,
    private toastrService: ToastrService) {

    this.router.navigate(["/main"]);

  }
    conditionsAccepted:boolean = false;

  ngOnInit(): void {
    //console.log("oninit main called");
    this.commonDataService.getisTermsConditionAccepted.subscribe({
      next: (val) => {
        this.conditionsAccepted = val;
         console.log("conditionsAccepted=", this.conditionsAccepted);
      }
    });
  }

  routeSeq1: Array<CompData> = [
    {
      route: '/main',
      menuGroup: 0
    },
    {
      route: '/main/terms-conditions',
      menuGroup: 0
    },
    {
      route: '/main/diabetes-status/',
      menuGroup: 1
    },
    {
      route: '/main/current-symptoms',
      menuGroup: 2
    },
    {
      route: '/main/blood-test',
      menuGroup: 3
    },
    {
      route: '/main/diabetes-complications',
      menuGroup: 4
    },
    {
      route: '/main/past-medication',
      menuGroup: 5
    }
    , {
      route: '/main/health-maintainance',
      menuGroup: 6
    }
  ]




  compSequence: Array<string> = ['/main', '/main/terms-conditions', '/main/diabetes-status/',
    '/main/current-symptoms', '/main/family-history', '/main/medical-condition', '/main/diagnosis-history', '/main/chat'];
  currIndex: number = 0;


  previous() {

    const len = this.routeSeq1.length;
    if (this.currIndex <= 0) {
      this.currIndex = len - 1;
    }
    else {
      this.currIndex = (this.currIndex - 1) % len;
    }

    this.router.navigate([this.routeSeq1[this.currIndex].route]);
    this.commonDataService.setActiveGrpNum(this.routeSeq1[this.currIndex].menuGroup)
  }

  next() {
  
   
    if (this.currIndex == 1) {
    
      if (this.conditionsAccepted == false) {
        this.toastrService.warning("Please accept terms and conditions before moving forward");
        return;
      }


    }

    const len = this.routeSeq1.length;
    this.currIndex = (this.currIndex + 1) % len;
    console.log("this.currIndex=", this.currIndex);
    this.router.navigate([this.routeSeq1[this.currIndex].route]);
    this.commonDataService.setActiveGrpNum(this.routeSeq1[this.currIndex].menuGroup)
  }





}
