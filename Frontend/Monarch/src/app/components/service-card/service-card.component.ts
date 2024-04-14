import { Component, Input, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { ItineraryEvent } from "../../types/itinerary-event.type";

@Component({
  selector: "app-service-card",
  templateUrl: "./service-card.component.html",
  styleUrls: ["./service-card.component.css"],
  imports: [MatIconModule],
  standalone: true,
})
export class ServiceCardComponent implements OnInit {
  @Input() data!: Omit<ItineraryEvent, "reviews">;

  @Input() showPrice!: boolean;

  constructor() {}

  ngOnInit() {}
}
