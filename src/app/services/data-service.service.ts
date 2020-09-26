import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeStamp } from 'console';
import { map } from 'rxjs/Operator';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  private globalDataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/09-25-2020.csv';
  constructor(private http : HttpClient) { }
  getGLobalData(){
    return this.http.get(this.globalDataUrl , {responseType : 'text'}).pipe(
      map (result =>{
        return result;
        
      })
    )

  }
}