export interface CurrencyExchangeRates {
    data: {
        [currency: string]: number;
    };
}

export interface CurrencyPair {
    base: string;
    symbols: string[];
  }