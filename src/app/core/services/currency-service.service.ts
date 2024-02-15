import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyExchangeRates } from '../models/currencyRate';
import { environment } from 'src/environment/environment';
import { CurrencyPair } from '../models/currencyRate';

@Injectable({
  providedIn: 'root',
})
export class CurrencyServiceService {
  private currencyStatusUrl =
    '../../../assets/mock-response/latest-exchange-response.json';
  private baseUrl = environment.baseUrl;
  private apiKey = environment.apiKey;
  constructor(private http: HttpClient) {}

  public getCurrencyStatus(): Observable<CurrencyExchangeRates> {
    return this.http.get<CurrencyExchangeRates>(this.currencyStatusUrl);
  }

  public getEchangeRate(currencyPair: CurrencyPair): Observable<any> {
    const params = new HttpParams();
    params.set('apiKey', this.apiKey);
    params.set('q', `${currencyPair.base}_${currencyPair.symbols.join(',')}`);
    return this.http.get<any>(this.baseUrl, { params });
  }

}
