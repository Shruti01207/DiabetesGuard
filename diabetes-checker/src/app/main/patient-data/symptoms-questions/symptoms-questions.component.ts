import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from '../../services/common-data.service';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-symptoms-questions',
  templateUrl: './symptoms-questions.component.html',
  styleUrls: ['./symptoms-questions.component.css']
})
export class SymptomsQuestionsComponent implements OnInit {


  id: number = 4;

  constructor(private fb: FormBuilder,
    private commonService: CommonDataService
  ) { }

  ngOnInit(): void {


    this.symptomsForm = this.fb.group(
      {
        excessUrination: ['', Validators.required],
        excessThristy: ['', Validators.required],
        looseWeight: ['', Validators.required],
        blurryVision: ['', Validators.required],
        numbFeet: ['', Validators.required],
        tired: ['', Validators.required],
        drySkin: ['', Validators.required],
        moreInfection: ['', Validators.required],
        slowHealing: ['', Validators.required]

      }
    );

    this.getFormValue("currentSymptoms");

    this.commonService.getValidationEvent(this.id - 1).subscribe({
      next: (res) => {
        console.log("res=", res);

        this.Submit();
      }
    })

  }


  symptomsForm!: FormGroup;




  symptomQuestions: Array<any> = [
    {
      question: "Do you urinate a lot?",
      formControlName: "excessUrination"
    },
    {
      question: "Do you feel more thristy?",
      formControlName: "excessThristy"
    }, {
      question: "Do you have numb or tingling hands or feet?",
      formControlName: "numbFeet"
    },
    {
      question: "Are you loosing your weight, without trying?",
      formControlName: "looseWeight"
    },
    {
      question: "Do you have blurry vision?",
      formControlName: "blurryVision"
    },
    {
      question: "Do you feel very tired, more often?",
      formControlName: "tired"
    },
    {
      question: "Do you have very dry skin?",
      formControlName: "drySkin"
    },
    {
      question: "Do you have more infections than usual?",
      formControlName: "moreInfection"
    },
    {
      question: "Do you have sores that heal slowly?",
      formControlName: "slowHealing"
    }

  ]

  Submit() {
    if (this.symptomsForm.valid) {

      this.setFormValue("currentSymptoms");
      this.commonService.formValid = true;

    }
    else {
      this.commonService.formValid = false;
      let errorMessages = document.getElementsByClassName("errormsg") as HTMLCollection

      for (let index = 0; index < errorMessages.length; index++) {
        const element = errorMessages[index] as HTMLElement;
        element.classList.remove('error');
      }

    }

  }

  getFormValue(key: string) {
    const formValue = sessionStorage.getItem(key);
    if (formValue) {
      const obj = JSON.parse(formValue);
      this.symptomsForm.patchValue(obj);
    }
  }

  setFormValue(key: string) {
    sessionStorage.setItem(key, JSON.stringify((this.symptomsForm.value as Object)));
  }
}
