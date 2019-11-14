export interface Bill {
  readonly userRuc: string;
  readonly companyRuc: string;
  readonly releaseDate: string;
  readonly payDay: string;
  readonly totalAmount: number;
  readonly daysPerYear: number;
  readonly tax: number;
  readonly discountDate: string;
  readonly concept: string;
  readonly releaseDateParse: string;
  readonly payDayParse: string;
  readonly discountDateParse: string;
  readonly totalAmmountFinal: number;
  readonly retention: number;
  readonly discount: number;
  readonly taxPeriod: string;
}
