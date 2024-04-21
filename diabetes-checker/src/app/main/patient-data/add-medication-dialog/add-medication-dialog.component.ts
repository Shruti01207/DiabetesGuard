import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, catchError, concat, concatMap, debounceTime, distinctUntilChanged, filter, forkJoin, map, of, startWith } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MedicationService } from '../services/medication.service';
import { log } from 'console';
import { openFda } from '../models/openfda';
import { medicineData } from '../models/selectedmedicine';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
@Component({
  selector: 'app-add-medication-dialog',
  templateUrl: './add-medication-dialog.component.html',
  styleUrls: ['./add-medication-dialog.component.css']
})
export class AddMedicationDialogComponent implements OnInit {




  constructor(private medicationService: MedicationService,
    private authService: AuthService, public dialogRef: MatDialogRef<AddMedicationDialogComponent>,
    private fb: FormBuilder) { }


  myControl = new FormControl();
  medByBrand?: Observable<Array<openFda>>;
  medByGeneric?: Observable<Array<openFda>>;
  medByIngredient?: Observable<Array<openFda>>;
  isdataLoading: boolean = false;
  tabs: number = 2;
  data: Observable<Array<any>> = of([]);
  selectedTabIndex: number = 0;
  presType: string = "medicine";
  tabsName: Array<string> = ['medicine', 'insulin'];

  pastPrescForm2 = this.fb.array([])


  medPrescForm = new FormGroup({
    type: new FormControl('medicine'),
    brandNames: new FormControl(''),
    substances: new FormControl(''),
    dose: new FormControl(''),
    insulinType: new FormControl('none'),
    frequency: new FormControl('0'),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });

  insulinPrescForm = new FormGroup({
    type: new FormControl('insulin'),
    brandNames: new FormControl(''),
    substances: new FormControl(''),
    dose: new FormControl(''),
    insulinType: new FormControl('0'),
    frequency: new FormControl('0'),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });


  toggleVariable() {
    this.isdataLoading = !this.isdataLoading;
  }

  ngOnInit() {

    this.myControl.valueChanges.pipe(debounceTime(1000),
      distinctUntilChanged()).subscribe({
        next: (val) => {

          this.isdataLoading = true;

          this.medByBrand = this.medicationService.getSuggestions(this.myControl.value, "openfda.brand_name");
          this.medByGeneric = this.medicationService.getSuggestions(this.myControl.value, "openfda.generic_name")
          this.medByIngredient = this.medicationService.getSuggestions(this.myControl.value, "openfda.active_ingredient")


          this.data = forkJoin([this.medByBrand, this.medByGeneric, this.medByIngredient]).pipe(
            concatMap(([res1, res2, res3]) =>
              of([...res1, ...res2, ...res3]).pipe(
                // Use filter directly within map to filter items based on brand_name length
                map((items) => items.filter((med) => med.brandNames.length > 0))
              )
            )
          );

          this.data = this.data.pipe(map(obj => obj.reduce((acc, item) => {
            if (!acc.some((obj: openFda) => obj.brandNames[0] === item.brandNames[0])) {
              acc.push(item);
            }
            return acc;
          }, [])));



          this.data.subscribe({
            next: (res) => {
              this.toggleVariable();
              console.log("after merge", res);
            }
          })
        }
      });

    // this.intializeFormArray();





  }

  selectMedicine(option: any, type: string) {

    if (type === "medicine") {
      this.medPrescForm.patchValue(option);
      this.medPrescForm.controls['brandNames'].setValue(option.brandNames);
      console.log("this.medPrescForm=", this.medPrescForm.value);
    }
    else {
      this.insulinPrescForm.patchValue(option);
      this.insulinPrescForm.controls['brandNames'].setValue(option.brandNames);
      console.log("this.insulinPrescForm=", this.insulinPrescForm.value);
    }

  }
  addMedicine(type: string) {
    console.log(" this.medPrescForm.value=", this.medPrescForm.value);

    if (type === "medicine") {
      console.log("this.medPrescForm.value=", this.medPrescForm.value);
    }
    else {
      console.log("this.insulinPrescForm.value=", this.insulinPrescForm.value);
    }

    // this.medicationService.addMedicine(this.medPrescForm.value)
    //   .subscribe({
    //     next: (res) => {
    //       console.log("res", res);
    //       this.closeDialog();
    //     }
    //   })
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }


  onTabChange(tabChangeEvent: MatTabChangeEvent) {

    this.selectedTabIndex = tabChangeEvent.index;

    // Update form control value based on selected tab index
    if (this.selectedTabIndex === 0) {
      this.presType = "medicine";
    } else {
      this.presType = "insulin";
    }

    console.log("this.presType=", this.presType);

  }





}