import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from '../../services/common-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blood-sugar-test',
  templateUrl: './blood-sugar-test.component.html',
  styleUrls: ['./blood-sugar-test.component.css']
})
export class BloodSugarTestComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private commonService: CommonDataService,
    private toastr: ToastrService
  ) { }

  id:number=5;
  bloodTestForm!: FormGroup;

  ngOnInit(): void {
    this.bloodTestForm= this.fb.group(
      {
        fastingTest: [, Validators.required],
        hb1Ac: [, Validators.required]
       
      }
    );

    this.getFormValue("bloodTest")
    
    
    this.commonService.getValidationEvent(this.id - 1).subscribe({
      next: (res) => {    
        this.Save();
      }
    })
    
  }

  


  Save(){
    if(this.bloodTestForm.valid){
      this.setFormValue("bloodTest");
      this.commonService.formValid=true;
    }
    else{
      this.commonService.formValid=false;
    }
  }
  getFormValue(key: string) {
    const formValue = sessionStorage.getItem(key);
    if (formValue) {
      const obj = JSON.parse(formValue);
      this.bloodTestForm.patchValue(obj);
    }
  }

  setFormValue(key: string) {
    sessionStorage.setItem(key, JSON.stringify((this.bloodTestForm.value as Object)));
  }

}
