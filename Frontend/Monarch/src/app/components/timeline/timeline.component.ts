import { Component, OnInit } from "@angular/core";
import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import { Itinerary } from "../../types/itinerary.type";
import { MatButtonModule } from "@angular/material/button";
import { ItineraryEvent } from "../../types/itinerary-event.type";
import { ServiceCardComponent } from "../service-card/service-card.component";
import { ReviewComponent } from "../review/review.component";

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
  standalone: true,
  imports: [
    TimelineModule,
    CardModule,
    CommonModule,
    MatButtonModule,
    ServiceCardComponent,
    ReviewComponent,
  ],
})
export class TimelineComponent implements OnInit {
  events: Itinerary[] = [];

  current_event?: ItineraryEvent | undefined;

  constructor() {
    this.events = [
      {
        date: new Date(),
        name: "Museum X",
        price: 50,
      },
      {
        date: new Date(),
        name: "Museum Y",
        price: 20,
      },
    ];
  }

  ngOnInit(): void {}

  get current_price(): number {
    return this.events.reduce((prev, current) => prev + current.price, 0);
  }

  showDetails(event: Itinerary): void {
    this.current_event = {
      id: 1,
      name: event.name,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus perspiciatis impedit exercitationem, accusantium",
      disabilities: ["accessible"],
      price: event.price,
      reviews: [{ comment: "Un lugar poco accesible.", stars: 2 }],
    };
  }
}
