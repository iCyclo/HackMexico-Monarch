import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DateRange, MatDatepickerModule } from "@angular/material/datepicker";
import {MatCardModule} from '@angular/material/card';

import { provideNativeDateAdapter } from "@angular/material/core";



@Component({
  selector: "app-travel-date",
  templateUrl: "./travel-date.component.html",
  styleUrls: ["./travel-date.component.css"],
  standalone: true,
  imports: [
    MatCardModule,
    MatDatepickerModule,
  ],
  providers: [
    provideNativeDateAdapter()
  ]
})
export class TravelDateComponent implements OnInit {
  constructor() {}

  @Input() selectedRangeValue: DateRange<Date> | undefined;
  @Output() selectedRangeValueChange = new EventEmitter<DateRange<Date>>();

  selectedChange(m: any) {
      if (!this.selectedRangeValue?.start || this.selectedRangeValue?.end) {
          this.selectedRangeValue = new DateRange<Date>(m, null);
      } else {
          const start = this.selectedRangeValue.start;
          const end = m;
          if (end < start) {
              this.selectedRangeValue = new DateRange<Date>(end, start);
          } else {
              this.selectedRangeValue = new DateRange<Date>(start, end);
          }
      }
      this.selectedRangeValueChange.emit(this.selectedRangeValue);
  }



  ngOnInit() {}
}
