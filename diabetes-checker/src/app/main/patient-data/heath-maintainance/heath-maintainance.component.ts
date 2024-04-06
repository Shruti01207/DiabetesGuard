import { Component, OnInit } from '@angular/core';
import { BotQuestion } from '../models/botQuestion';

@Component({
  selector: 'app-heath-maintainance',
  templateUrl: './heath-maintainance.component.html',
  styleUrls: ['./heath-maintainance.component.css']
})
export class HeathMaintainanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentSet:number=0;

  symptomQuestions: Array<Array<BotQuestion>> = [
    [
      {
        question:"Do you exercise daily?",
        type:"mcq",
        inputType:"none",
        placeholder:"none",
        options:["Yes","No","Not-Sure"]
      },
      {
        question:"How many steps you walk in a day",
        type:"input",
        inputType:"number",
        placeholder:"Enter number of steps you walk in a day",
        options:[]
      },
      {
        question:"Are you controlling your diet?",
        type:"mcq",
        inputType:"none",
        placeholder:"none",
        options:["Yes","No","Not-Sure"]
      },
      {
        question:"What are your dietary habits?",
        type:"mcq",
        inputType:"none",
        placeholder:"none",
        options:["Vegetarian","Non-Vegetarian","Both"]
      },
      {
        question: "How many calories do you consume in a day?",
        type:"input",
        inputType:"number",
        placeholder:"Calories consumed per day (cal/day)",
        options:[]
      }
    ]
  ]

  changeSet(){
    this.currentSet=(this.currentSet+1)%this.symptomQuestions.length;
  }

}
