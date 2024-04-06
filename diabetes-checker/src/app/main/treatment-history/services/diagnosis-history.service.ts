import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiagnoseHistory } from '../models/diagnose-history';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisHistoryService {

  

  constructor(private http: HttpClient) { }

  getDiagnosisHistory(): Observable<DiagnoseHistory[]> {
    return this.http.get<DiagnoseHistory[]>('http://localhost:3000/treatment-historys')
  }

  addDiagnoseHistory(history: DiagnoseHistory): Observable<DiagnoseHistory> {
    return this.http.post<DiagnoseHistory>('http://localhost:3000/treatment-historys', history);
  }

  editDiagnoseHistory(history: DiagnoseHistory, id: string): Observable<DiagnoseHistory> {

    return this.http.put<DiagnoseHistory>('http://localhost:3000/treatment-historys/' + id, {
      id: id,
      diagnosedDate: history.diagnosedDate,
      pastSymptoms: history.pastSymptoms,
      pastMedications:  history.pastMedications
    });
  }

  deleteDiagnoseHistory(id: string) {
    return this.http.delete<DiagnoseHistory>('http://localhost:3000/treatment-historys/' + id);
  }

  getDiagnoseHistoryById(id: string) {
    return this.http.get<DiagnoseHistory>('http://localhost:3000/treatment-historys/' + id);
  }

}
