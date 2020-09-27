import { Injectable } from '@angular/core';
import { HeroEquipmentItem } from './heroes-equipment-item';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesEqipmentItemService {

  private eqipmentUrl = 'api/equipment';

  constructor(private http: HttpClient) { }

  /**
   * @param id
   */
  getEqipmentItem(id: number): Observable<HeroEquipmentItem> {
    const url = `${this.eqipmentUrl}/${id}`;
    return this.http.get<HeroEquipmentItem>(url).pipe(
      catchError(this.handleError<HeroEquipmentItem>(`getEqipmentItem id=${id}`))
    );
  }


  /**
   * @param operation 
   * @param result 
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }
}