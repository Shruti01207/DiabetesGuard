import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicalCondition } from '../models/medical-condition';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalConditionsService {

  
  
  constructor(private http: HttpClient) { }

  getCondition(): Observable<MedicalCondition[]> {
    return this.http.get<MedicalCondition[]>('http://localhost:3000/medical-conditions')
  }

  addCondition(condition: MedicalCondition): Observable<MedicalCondition> {
    return this.http.post<MedicalCondition>('http://localhost:3000/medical-conditions', condition);
  }

  editCondition(condition: MedicalCondition, id: string): Observable<MedicalCondition> {
    
    return this.http.put<MedicalCondition>('http://localhost:3000/medical-conditions/' + id, {
      id: id,
      diagnosedDate: condition.diagnosedDate,
      disease: condition.disease
    });
  }

  deleteCondition(id: string) {
    return this.http.delete<MedicalCondition>('http://localhost:3000/medical-conditions/' + id);
  }

  getConditionById(id:string){
    return this.http.get<MedicalCondition>('http://localhost:3000/medical-conditions/' + id);
  }

}
