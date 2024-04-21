import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from '../../services/common-data.service';

@Component({
  selector: 'app-diabetes-complications',
  templateUrl: './diabetes-complications.component.html',
  styleUrls: ['./diabetes-complications.component.css']
})

export class DiabetesComplicationsComponent implements OnInit {

  constructor(private fb: FormBuilder, private commonService: CommonDataService) { }
  id: number = 6;

  ngOnInit(): void {
    this.complicationForm = this.fb.group({
      retinopathy: ['', Validators.required],
      feetChanges: ['', Validators.required],
      heartStrokeHistory: ['', Validators.required],
      nephropathy: ['', Validators.required],
      gumDisease: ['', Validators.required],
      cancer: ['', Validators.required],
      sexualProblems: ['', Validators.required],
      frequentInfections: ['', Validators.required],
      hypos: ['', Validators.required],
      hypers: ['', Validators.required],
      hhs: ['', Validators.required],
      dka: ['', Validators.required],
    });

    this.getFormValue("complications");

    this.commonService.getValidationEvent(this.id - 1).subscribe({
      next: (res) => {
        this.Save();
      }
    })
  }

  complicationForm!: FormGroup;

  currentSet: number = 0;
  complicationQuestions: Array<any> = [
    { question: "Are you suffering from Retinopathy?", formControlName: "retinopathy" },
    { question: "Did you notice any change in your feet look or feel?", formControlName: "feetChanges" },
    { question: "Have you also suffered from heart attacks and strokes?", formControlName: "heartStrokeHistory" },
    { question: "Have you suffered from Nephropathy or Kidney Disease?", formControlName: "nephropathy" },
    { question: "Are you suffering from any Gum disease or any other mouth problems?", formControlName: "gumDisease" },
    { question: "Are you suffering from cancer?", formControlName: "cancer" },
    { question: "Are you suffering from any sexual problems?", formControlName: "sexualProblems" },
    { question: "Do you have more infections than usual?", formControlName: "frequentInfections" },
    { question: "Do you suffer from Hypos, blood sugar level is too low?", formControlName: "hypos" },
    { question: "Do you suffer from Hypers, when your blood sugar level is high?", formControlName: "hypers" },
    { question: "Are you suffering from Hyperosmolar Hyperglycaemic State (HHS) ?", formControlName: "hhs" },
    { question: "Have you suffered from Diabetic Ketoacidosis, DKA ?", formControlName: "dka" },
  ];

  Save() {
    if (this.complicationForm.valid) {
      this.commonService.formValid = true;
      this.setFormValue("complications");
    }
    else {
      this.commonService.formValid = false;
    }
  }

  getFormValue(key: string) {
    const formValue = sessionStorage.getItem(key);
    if (formValue) {
      const obj = JSON.parse(formValue);
      this.complicationForm.patchValue(obj);
    }
  }

  setFormValue(key: string) {
    sessionStorage.setItem(key, JSON.stringify((this.complicationForm.value as Object)));
  }



}
