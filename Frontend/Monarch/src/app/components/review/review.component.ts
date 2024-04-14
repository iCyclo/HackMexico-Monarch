import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormsModule, NgModel, ReactiveFormsModule } from "@angular/forms";
import { RatingModule } from "primeng/rating";
import { Review } from "../../types/review.type";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"],
  imports: [RatingModule, CommonModule, ReactiveFormsModule, FormsModule],
  standalone: true,
})
export class ReviewComponent implements OnInit {
  @Input() reviews!: Review[];

  value!: number;

  constructor() {}

  ngOnInit() {}
}
