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
  getEqipmentItems(ids: number[]): Observable<HeroEquipmentItem[]> {
    if(ids.length) {
       return this.http.get<HeroEquipmentItem[]>(this.generateAPIUrl(ids))
      .pipe(
        catchError(this.handleError<HeroEquipmentItem[]>('getHeroes', []))
      );
    }
  }

  private generateAPIUrl(ids: number[]): string {
    var url = `${this.eqipmentUrl}?`;

    ids.forEach(element => {
      url = url + 'id=' + element + '&';
    });

    return url;
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