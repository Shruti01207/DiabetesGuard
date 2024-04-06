import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diabetes-complications',
  templateUrl: './diabetes-complications.component.html',
  styleUrls: ['./diabetes-complications.component.css']
})
export class DiabetesComplicationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentSet: number = 0;

  symptomQuestions: Array<Array<string>> = [
    ["Are you suffering from Retinopathy?",
      "Did you notice any change in your feet look or feel?",
      "Have you also suffered from heart attacks and strokes?",
      "Have you suffered from Nephropathy or Kidney Disease ?",
      "Are you suffering from any Gum disease or any other mouth problems?",
      "Are you suffering from cancer?"], [
      "Are you suffering from any sexual problems?",
      "Do you have more infections than usual?",
      "Do you suffer from Hypos, blood sugar level is too low?",
      "Do you suffer from Hypers, when your blood sugar level is high?",
      "Are you suffering from Hyperosmolar Hyperglycaemic State (HHS) ?",
      "Have you suffered from Diabetic Ketoacidosis, DKA ?"
    ]
  ]

  changeSet() {
    this.currentSet = (this.currentSet + 1) % this.symptomQuestions.length;
  }

}
