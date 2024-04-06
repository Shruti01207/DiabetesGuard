import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FamilyHistory } from '../models/family-history';

@Injectable({
  providedIn: 'root'
})
export class FamilyHistoryService {

 
  constructor( private http: HttpClient) { }

  getHistory(): Observable<FamilyHistory[]> {
    return this.http.get<FamilyHistory[]>('http://localhost:3000/family-history')
  }

  addHistory(history: FamilyHistory): Observable<FamilyHistory> {
    return this.http.post<FamilyHistory>('http://localhost:3000/family-history', history);
  }

  editHistory(history: FamilyHistory, id: string): Observable<FamilyHistory> {
    console.log("history",history);
    
    return this.http.put<FamilyHistory>('http://localhost:3000/family-history/' + id, {
      id: id,
      type: history.type,
      relation: history.relation
    });
  }

  deleteHistory(id: string) {
    return this.http.delete<FamilyHistory>('http://localhost:3000/family-history/' + id);
  }

  getHistoryById(id:string){
    return this.http.get<FamilyHistory>('http://localhost:3000/family-history/' + id);
  }





}
