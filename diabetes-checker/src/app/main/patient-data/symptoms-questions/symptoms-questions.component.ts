import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symptoms-questions',
  templateUrl: './symptoms-questions.component.html',
  styleUrls: ['./symptoms-questions.component.css']
})
export class SymptomsQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentSet:number=0;

  symptomQuestions: Array<Array<string>> = [
    ["Do you urinate a lot?",
      "Do you feel more thristy?",
      "Are you loosing your weight, without trying?",
      "Do you have blurry vision?",
      "Do you have numb or tingling hands or feet?",
      "Do you feel very tired, more often?"], [
      "Do you have very dry skin?",
      "Do you have more infections than usual?",
      "Do you have sores that heal slowly?"]
  ]

  changeSet(){
    this.currentSet=(this.currentSet+1)%this.symptomQuestions.length;
  }

}
