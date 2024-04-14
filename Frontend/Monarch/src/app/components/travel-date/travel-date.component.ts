import { Component, OnInit } from "@angular/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, JsonPipe } from "@angular/common";
import { MatNativeDateModule } from "@angular/material/core";



@Component({
  selector: "app-travel-date",
  templateUrl: "./travel-date.component.html",
  styleUrls: ["./travel-date.component.css"],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,

    CommonModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class TravelDateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
