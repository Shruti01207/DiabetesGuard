import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { openFda } from '../models/openfda';
import { medicineData } from '../models/selectedmedicine';
import { AuthService } from 'src/app/auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class MedicationService {


  constructor(private http: HttpClient,
    private authService: AuthService) { }


  getSuggestions(searchTerm: string, field: string): Observable<any> {
    if (searchTerm.length >= 2) {
      const url = `https://api.fda.gov/drug/label.json?search=${field}:${searchTerm}&limit=20`;
      this.http.get<any>(url).subscribe({
        next:(res)=>{
          console.log("api res=",res);
          
        }
      })
      return this.http.get<any>(url)
        .pipe(
          map(data => data.results.map((med: { openfda: any }) => {

            const brandNames = med?.openfda?.brand_name || [];
            const genericName = med?.openfda?.generic_name || [];
            const substances = med?.openfda?.substance_name || [];
            const route = med.openfda?.route || "";
            return {
              brandNames,
              genericName,
              substances,
              route
            }

            console.log("med", med);

          })), // Parse medication names  
          catchError(() => of([])) // Handle errors with empty observable
        );
    } else {
      return of([]);
    }
  }

  addMedicine(prescription: medicineData) {

    const body = {
      patientId: localStorage.getItem("patientId"),
      brandName: prescription.brandNames.join(),
      substances: prescription.substances.join(),
      startDate: prescription.startDate,
      endDate: prescription.endDate,
      frequency: Number(prescription.frequency),
      route: prescription.route.join()
    }
    console.log(body);


    return this.http.post('https://localhost:7169/api/PastMedications', body);
  }

  getMedicinesByPatientId(patientId: string) {
    return this.http.get('https://localhost:7169/api/PastMedications/' + localStorage.getItem("patientId") + '/patientId');
  }

  deleteById(medicineId: string) {
    return this.http.delete('https://localhost:7169/api/PastMedications/'+medicineId);
  }




  // getSuggestions(searchTerm: string, field: string): Observable<string[]> {E
  //   if (searchTerm.length >= 2) {
  //     const url = `https://api.fda.gov/drug/label.json?search=${field}:${searchTerm}&limit=10`;
  //     return this.http.get<any>(url)
  //       .pipe(
  //         map(data => data.results.map((med:{openfda:openFda}) => {

  //           const brandNames = med?.openfda?.brand_name || [];
  //           const genericName = med?.openfda?.generic_name || [];
  //           const substances = med?.openfda?.substance_name || [];
  //           const route= med.openfda?.route|| "";
  //           return {
  //             brandNames,
  //             genericName,
  //             substances,
  //             route
  //           }

  //           //console.log("med",med);

  //         })), // Parse medication names  
  //         catchError(() => of([])) // Handle errors with empty observable
  //       );
  //   } else {
  //     return of([]);
  //   }
  // }




}
