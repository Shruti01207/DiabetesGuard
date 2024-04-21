import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { BotService } from '../shared/services/bot.service';
import { CompData } from './medical-background/models/comp-data';
import { CommonDataService } from './services/common-data.service';
import { ToastrService } from 'ngx-toastr';
import { DiabetesStatusComponent } from './medical-background/diabetes-status/diabetes-status.component';

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

    this.router.navigateByUrl("/main");

  }
  conditionsAccepted: boolean = false;

  ngOnInit(): void {
    // const currIndex = sessionStorage.getItem("currIndex");
    // this.currIndex = Number(currIndex);
  }

  routeSeq1: Array<CompData> = [
    {
      id: 1,
      route: '/main',
      menuGroup: 0
    },
    {
      id: 2,
      route: '/main/terms-conditions',
      menuGroup: 0
    },
    {
      id: 3,
      route: '/main/diabetes-status/',
      menuGroup: 1
    },
    {
      id: 4,
      route: '/main/current-symptoms',
      menuGroup: 2
    },
    {
      id: 5,
      route: '/main/blood-test',
      menuGroup: 3
    },
    {
      id: 6,
      route: '/main/diabetes-complications',
      menuGroup: 4
    },
    {
      id: 7,
      route: '/main/past-medication',
      menuGroup: 5
    }
    , {
      id: 8,
      route: '/main/health-maintainance',
      menuGroup: 6
    },
    {
      id: 9,
      route: '/main/risk-factors',
      menuGroup: 7
    },
    {
      id:10,
      route:'/main/diabetes-management',
      menuGroup: 8
    
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
      this.commonDataService.formValid = false;
      sessionStorage.setItem("currIndex", this.currIndex.toString());
    }

    this.router.navigate([this.routeSeq1[this.currIndex].route]);
    this.commonDataService.setActiveGrpNum(this.routeSeq1[this.currIndex].menuGroup)
  }

  next() {

    this.commonDataService.checkComponent(this.currIndex);

    if (this.commonDataService.formValid || this.routeSeq1[this.currIndex].id == 1) {
      
      const len = this.routeSeq1.length;
      this.currIndex = (this.currIndex + 1) % len;
      sessionStorage.setItem("currIndex", this.currIndex.toString());
      this.router.navigate([this.routeSeq1[this.currIndex].route]);
      this.commonDataService.setActiveGrpNum(this.routeSeq1[this.currIndex].menuGroup)
      this.commonDataService.formValid = false;

    }
    else {
      this.toastrService.error("Please fill all the required fields!");
    }
  


  }





}
