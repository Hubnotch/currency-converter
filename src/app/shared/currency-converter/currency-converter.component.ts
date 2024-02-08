import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent {
  currencyForm: FormGroup;
  availableCurrencies: string[] = ['USD', 'EUR', 'GBP', 'JPY', 'AUD'];

  constructor(private formBuilder: FormBuilder) {
    this.currencyForm = this.formBuilder.group({
      amount: [0, [Validators.required, Validators.min(0)]],
      fromCurrency: ['EUR', Validators.required],
      toCurrency: ['USD', Validators.required],
    });
  }

  convertCurrency() {
    // Call your currency converter service with form data
    // Update the UI with the conversion result
  }
}
