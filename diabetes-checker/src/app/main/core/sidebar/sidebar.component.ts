import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../services/common-data.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private commonService: CommonDataService,
    private authService: AuthService
  ) { }

  diaStatus: string = "yes";
  userName: string = "Shruti";

  menu1: any = [
    {
      title: "Introduction",
      route: "/main"
    },
    {
      title: "Diabetes Status",
      route: "/main/diabetes-status"
    },
    {
      title: "Current Symptoms",
      route: "/main/current-symptoms"
    },
    {
      title: "Blood Sugar Tests",
      route: "/main/blood-test",
    },
    {
      title: "Diabetes Complications",
      route: "/main/diabetes-complications"
    }
    , {
      title: "Past Medications",
      route: "/main/past-medication"
    },
    {
      title: "Health Management",
      route: "/main/health-maintainance"
    },
    {
      title: "Risk Factors",
      route: "/main/risk-factors"
    },
    {
      title: "Diabetes Management",
      route:"/main/diabetes-management"
    }

  ]

  currMenu: any = this.menu1;
  activeGroupNum: number = 0;


  ngOnInit(): void {

    this.commonService.getDiaStatus.subscribe({
      next: (res) => {
        console.log("status update", res);
      }
    });

    this.commonService.getActiveGrpNum.subscribe({
      next: (res) => {
        this.activeGroupNum = res;

      }
    })

    this.userName="shruti_012"
    // temporary comented
    // this.userName = this.commonService.UserName as string;

  }

  showHideDropUp() {
    let ref = document.getElementsByClassName("dropup");

    for (let index = 0; index < ref.length; index++) {
      const element = ref[index] as HTMLBodyElement;
      element.style.display = (element.style.display == 'none') ? 'block' : 'none';
      console.log(element);
    }
  }


  logOut() {
    this.authService.logOut();
  }

}
