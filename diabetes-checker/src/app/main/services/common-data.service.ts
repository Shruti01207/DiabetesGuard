import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  constructor() { }

  private diabetesStatus= new BehaviorSubject<string>("yes");
  private isTermsConditionAccepted= new BehaviorSubject<boolean>(false);
  private activeMenuGroupLen= new BehaviorSubject<number>(0);

  getActiveGrpNum = this.activeMenuGroupLen.asObservable( );
  getDiaStatus=this.diabetesStatus.asObservable( );
  getisTermsConditionAccepted=this.isTermsConditionAccepted.asObservable( );
  
  setDiaStatus(status:string){
    this.diabetesStatus.next(status);
  }
  setActiveGrpNum(grpNum:number){
   this.activeMenuGroupLen.next(grpNum);
  }

  setTermsConditionAccepted(status:boolean){
    this.isTermsConditionAccepted.next(status);
  }

  
  public get UserName() {
    return localStorage.getItem('username');
  }
  

}
