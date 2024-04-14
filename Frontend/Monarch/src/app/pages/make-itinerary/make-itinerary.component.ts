import { Component, OnInit } from "@angular/core";
import { TimelineComponent } from "../../components/timeline/timeline.component";
import { StepperModule } from "primeng/stepper";
import { MatButtonModule } from "@angular/material/button";
import { ButtonModule } from "primeng/button";
import { CountrySelectComponent } from "../../components/country-select/country-select.component";
import { ManyPersonComponent } from "../../components/many-person/many-person.component";
import { TravelDateComponent } from "../../components/travel-date/travel-date.component";
import { ArrivePlaceComponent } from "../../components/arrive-place/arrive-place.component";
@Component({
  selector: "app-make-itinerary",
  templateUrl: "./make-itinerary.component.html",
  styleUrls: ["./make-itinerary.component.css"],
  standalone: true,
  imports: [
    TimelineComponent,
    StepperModule,
    MatButtonModule,
    ButtonModule,
    CountrySelectComponent,
    ManyPersonComponent,
    TravelDateComponent,
    ArrivePlaceComponent
  ],
})
export class MakeItineraryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
