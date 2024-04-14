import { Component, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-service-card",
  templateUrl: "./service-card.component.html",
  styleUrls: ["./service-card.component.css"],
  imports: [MatIconModule],
  standalone: true,
})
export class ServiceCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
