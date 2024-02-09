import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CurrencyExchangeRates} from '../models/currencyRate'

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {
private currencyStatusUrl :string = '../../../assets/mock-response/latest-exchange-response.json';
  constructor(private http:HttpClient) { }

public getCurrencyStatus():Observable<CurrencyExchangeRates>{
return this.http.get<CurrencyExchangeRates>(this.currencyStatusUrl)
}


}
