import { Component, OnInit } from '@angular/core';
import { BotQuestion } from '../models/botQuestion';
import { ActivatedRoute } from '@angular/router';
import { CommonDataService } from '../../services/common-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heath-maintainance',
  templateUrl: './heath-maintainance.component.html',
  styleUrls: ['./heath-maintainance.component.css']
})
export class HeathMaintainanceComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private commonService: CommonDataService,
    private fb: FormBuilder
  ) { }

  riskFactorsData = {
    id: 9
  }

  healthManagementData = {
    id: 8
  }

  healthMaintainanceForm!: FormGroup;
  riskFactorsForm!: FormGroup;
  questions!: Array<BotQuestion>
  form!: FormGroup;
  ngOnInit(): void {
    let id = 0;
    const currentRoute = this.activatedRoute.snapshot.url;
    const firstSegment = currentRoute[0].path;
    console.log("firstSegment=", firstSegment);

  
    this.healthMaintainanceForm = this.fb.group(
      {
        exerciseDaily: [, Validators.required],
        steps: [, Validators.required],
        onDiet: [, Validators.required],
        dietHabits: [, Validators.required],
        caloryConsumed: [, Validators.required]
      }
    );

    this.riskFactorsForm = this.fb.group(
      {
        highBP: [, Validators.required],
        heartDisease: [, Validators.required],
        obesity: [, Validators.required],
        smoking: [, Validators.required],
        alocoholism: [, Validators.required],
        others: [, Validators.required],
      }
    );
    this.getFormValue(firstSegment,firstSegment);
    if (firstSegment == 'risk-factors') {
      id = this.riskFactorsData.id;
      this.questions = this.otherRiskFactors;
      this.form = this.riskFactorsForm;
    }
    else {
      id = this.healthManagementData.id;
      this.questions = this.healthQuestions;
      this.form = this.healthMaintainanceForm
    }

    this.commonService.getValidationEvent(id - 1).subscribe({
      next: (res) => {
        this.Save(firstSegment);
      }
    })

  }
  currentSet: number = 0;

  healthQuestions: Array<BotQuestion> =
    [
      {
        question: "Do you exercise daily?",
        type: "mcq",
        inputType: "none",
        placeholder: "none",
        formControlName: "exerciseDaily",
        options: ["Yes", "No", "Not-Sure"]
      },
      {
        question: "How many steps you walk in a day",
        type: "input",
        inputType: "number",
        placeholder: "Enter number of steps you walk in a day",
        formControlName: "steps",
        options: []
      },
      {
        question: "Are you controlling your diet?",
        type: "mcq",
        inputType: "none",
        placeholder: "none",
        options: ["Yes", "No", "Not-Sure"],
        formControlName: "onDiet"
      },
      {
        question: "What are your dietary habits?",
        type: "mcq",
        inputType: "none",
        placeholder: "none",
        options: ["Vegetarian", "Non-Vegetarian", "Both"],
        formControlName: "dietHabits"
      },
      {
        question: "How many calories do you consume in a day?",
        type: "input",
        inputType: "number",
        placeholder: "Calories consumed per day (cal/day)",
        options: [],
        formControlName: "caloryConsumed"
      }
    ]




  otherRiskFactors: Array<BotQuestion> = [
    {
      question: "Do you have high Blood Pressure?",
      type: "mcq",
      inputType: "none",
      placeholder: "none",
      formControlName: "highBP",
      options: ["Yes", "No", "Not-Sure"]
    },
    {
      question: "Are you suffering from any heart disease?",
      type: "mcq",
      inputType: "none",
      placeholder: "none",
      formControlName: "heartDisease",
      options: ["Yes", "No", "Not-Sure"]
    },
    {
      question: "Are you suffering from obesity?",
      type: "mcq",
      inputType: "none",
      placeholder: "none",
      formControlName: "obesity",
      options: ["Yes", "No", "Not-Sure"]
    },
    {
      question: "Do you smoke?",
      type: "mcq",
      inputType: "none",
      placeholder: "none",
      formControlName: "smoking",
      options: ["Yes", "No"]
    },
    {
      question: "Do you consume alcohol?",
      type: "mcq",
      inputType: "none",
      placeholder: "none",
      formControlName: "alocoholism",
      options: ["Yes", "No"]
    },
    {
      question: "Any Other",
      type: "input",
      inputType: "text",
      placeholder: "Please specify any other risk you are suffering from",
      formControlName: "others",
      options: []
    }


  ]








  Save(firstSegment: string) {
    console.log("firstSegment=", firstSegment);
    if (firstSegment == "risk-factors") {
      if (this.riskFactorsForm.valid) {
        this.commonService.formValid = true;
        this.setFormValue("risk-factors", firstSegment);
      }
      else {
        this.commonService.formValid = false;
      }
    }
    else {
      if (this.healthMaintainanceForm.valid) {
        this.setFormValue("health-maintainance", firstSegment);
        this.commonService.formValid = true;
      }
      else {
        this.commonService.formValid = false;
      }
    }


  }


  getFormValue(key: string, firstSegment: string) {
    const formValue = sessionStorage.getItem(key);
    console.log(formValue);
    
    if (formValue) {
      const obj = JSON.parse(formValue);
      if (firstSegment == "risk-factors")
        this.riskFactorsForm.patchValue(obj);
      else
        this.healthMaintainanceForm.patchValue(obj);
    }
  }

  setFormValue(key: string, firstSegment: string) {
    if (firstSegment == "risk-factors") {
      sessionStorage.setItem(key, JSON.stringify((this.riskFactorsForm.value as Object)));
    }
    else {
      sessionStorage.setItem(key, JSON.stringify((this.healthMaintainanceForm.value as Object)))
    }

  }
}
