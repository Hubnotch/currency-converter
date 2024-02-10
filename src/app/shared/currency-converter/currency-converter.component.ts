import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CurrencyExchangeRates } from 'src/app/core/models/currencyRate';
import { CurrencyServiceService } from 'src/app/core/services/currency-service.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent {
  public currentCurrencyStatus:any = [];
  public usdRate!:number;
  public eurRate!:number;
  currencyForm: FormGroup;
  availableCurrencies: string[] = ['USD', 'EUR', 'GBP', 'JPY', 'AUD'];

  constructor(private formBuilder: FormBuilder, private currencyService: CurrencyServiceService) {
    this.currencyForm = this.formBuilder.group({
      amount: [0, [Validators.required, Validators.min(0)]],
      fromCurrency: ['EUR', Validators.required],
      toCurrency: ['USD', Validators.required],
    });
  }

  ngOnInit():void{
this.currencyService.getCurrencyStatus().subscribe(
  (data:CurrencyExchangeRates)=> {
    let rates =Object.entries(data.data).map(([currency, rate]) => ({ currency, rate }));
    this.currentCurrencyStatus = rates;
    for(let rate of rates){
    if(rate.currency === 'USD') {
      this.usdRate = rate.rate;
    }
    if(rate.currency === 'EUR') {
      this.eurRate = rate.rate;
        }
    }
    console.log(this.currentCurrencyStatus);
  }
)

  };
  convertCurrency() {
  return;
  }
}
