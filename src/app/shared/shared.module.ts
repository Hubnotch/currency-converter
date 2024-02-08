import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyConverterHistoryComponent } from './currency-converter-history/currency-converter-history.component';



@NgModule({
  declarations: [
    NavComponent,
    CurrencyConverterComponent,
    CurrencyConverterHistoryComponent
  ],
  exports:[
    NavComponent,
    CurrencyConverterComponent,
    FormsModule,
    ReactiveFormsModule,
    CurrencyConverterHistoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
