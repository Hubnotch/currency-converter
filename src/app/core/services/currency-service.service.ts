import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {data} from '../../../assets/mock-response/'

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {
private currencyStatusUrl :string = '../../../assets/mock-response/latest-exchange-response.json';
  constructor(private http:HttpClient) { }

public getCurrencyStatus():Observable<any>{
return this.http.get<any>(this.currencyStatusUrl)
}


}
