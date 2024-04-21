import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  constructor() { }

  private diabetesStatus = new BehaviorSubject<string>("yes");
  private isTermsConditionAccepted = new BehaviorSubject<boolean>(false);
  private activeMenuGroupLen = new BehaviorSubject<number>(0);
  // private isValid: Array<Subject<void>> =  Array.from({ length: 8 }, () => new Subject<void>());
  private isValid: Array<BehaviorSubject<boolean>> = Array.from({ length: 9 }, () => new BehaviorSubject<boolean>(false));

  public formValid:boolean=false;
  
  getActiveGrpNum = this.activeMenuGroupLen.asObservable();
  getDiaStatus = this.diabetesStatus.asObservable();
  getisTermsConditionAccepted = this.isTermsConditionAccepted.asObservable();

  setDiaStatus(status: string) {
    this.diabetesStatus.next(status);
  }
  setActiveGrpNum(grpNum: number) {
    this.activeMenuGroupLen.next(grpNum);
  }

  setTermsConditionAccepted(status: boolean) {
    this.isTermsConditionAccepted.next(status);
  }


  public get UserName() {
    return localStorage.getItem('username');
  }

  checkComponent(index: number) {
    console.log("index1=",index);  
    this.isValid[index].next(true);
    
  }

  getValidationEvent(index:number){
    console.log("index2=",index);
    return this.isValid[index].asObservable( );
  }

}
