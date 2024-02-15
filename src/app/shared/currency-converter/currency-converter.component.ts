import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CurrencyExchangeRates } from 'src/app/core/models/currencyRate';
import { CurrencyServiceService } from 'src/app/core/services/currency-service.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit{
  public currentCurrencyStatus:any = [];
  public usdRate!:number;
  public eurRate!:number;
  currencyForm: FormGroup;
  availableCurrencies: string[] = ['USD', 'EUR', 'GBP', 'JPY', 'AUD'];
  exchangeRates: any = {};
  constructor(private formBuilder: FormBuilder, private currencyService: CurrencyServiceService) {
    this.currencyForm = this.formBuilder.group({
      amount: [1, [Validators.required, Validators.min(1)]],
      fromCurrency: ['EUR', Validators.required],
      toCurrency: ['USD', Validators.required],
    });
  }

  ngOnInit():void{
this.currencyService.getCurrencyStatus().subscribe(
  (data:CurrencyExchangeRates)=> {
    const rates =Object.entries(data.data).map(([currency, rate]) => ({ currency, rate }));
    this.currentCurrencyStatus = rates;
    for(const rate of rates){
    if(rate.currency === 'USD') {
      this.usdRate = rate.rate;
    }
    if(rate.currency === 'EUR') {
      this.eurRate = rate.rate;
        }
    }
  }
)}
  convertCurrency() {
  return;
  }

  getExchangeRates() {
    this.currencyService
    .getEchangeRate({ base: this.currencyForm?.get('fromCurrency')?.value, symbols: this.currencyForm?.get('toCurrency')?.value })
      .subscribe(data => {
        this.exchangeRates = data;
      });
  }

  onBaseCurrencyChange(event:any){
    const amount = this.currencyForm?.get('amount')?.value;
    console.log(amount);
  }

}
