import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, catchError, concat, concatMap, debounceTime, distinctUntilChanged, filter, forkJoin, map, of, startWith } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MedicationService } from '../services/medication.service';
import { log } from 'console';
import { openFda } from '../models/openfda';
import { medicineData } from '../models/selectedmedicine';
import { AuthService } from 'src/app/auth/services/auth.service';
@Component({
  selector: 'app-add-medication-dialog',
  templateUrl: './add-medication-dialog.component.html',
  styleUrls: ['./add-medication-dialog.component.css']
})
export class AddMedicationDialogComponent implements OnInit {




  constructor(private medicationService: MedicationService,
             private authService: AuthService) { }


  myControl = new FormControl();
  medByBrand?: Observable<Array<openFda>>;
  medByGeneric?: Observable<Array<openFda>>;
  medByIngredient?: Observable<Array<openFda>>;
  isdataLoading: boolean = false;
  data: Observable<Array<any>> = of([]);
  // selectedMedicine: medicineData = {
  //   brandName: [""],
  //   substances: [],
  //   route: "",
  //   frequency:0,
  //   startDate:new Date(),
  //   endDate: new Date()

  // };


  pastPrescForm = new FormGroup({
    brandNames: new FormControl(''),
    substances: new FormControl(''),
    route: new FormControl(''),
    frequency:new FormControl(''),
    startDate:new FormControl(''),
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
      })
  }

  selectMedicine(option: any) {

    // this.selectedMedicine.brandNames = option.brandNames;
    // this.selectedMedicine.substances = option.substances;
    // this.selectedMedicine.route = option.route;
  this.pastPrescForm.patchValue(option);
  this.pastPrescForm.controls['brandNames'].setValue(option.brandNames);
  }
  addMedicine( ){
    console.log("this.pastPrescForm.value=",this.pastPrescForm.value);

     this.medicationService.addMedicine(this.pastPrescForm.value)
     .subscribe({
      next:(res)=>{
        console.log("res",res);     
      }
     })
  }
}