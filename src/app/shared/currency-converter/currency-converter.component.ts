import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CurrencyServiceService } from 'src/app/core/services/currency-service.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent {
  public currentCurrencyStatus:any = [];
  public usdRate!:string;
  public eurRate!:string;
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
  data=> {
    let rates =Object.entries(data.data).map(([currency, rate]) => ({ currency, rate }));
    this.currentCurrencyStatus = rates;
    for(let rate of rates){
    if(rate.currency === 'USD') {
      this.usdRate = rate.rate as string;
    }
    if(rate.currency === 'EUR') {
      this.eurRate = rate.rate as string;
        }
    }
    console.log(this.currentCurrencyStatus);
  }
)

  };
  convertCurrency() {
    // Call your currency converter service with form data
    // Update the UI with the conversion result
  }
}
