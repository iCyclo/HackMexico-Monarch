import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  imports: [
    RatingModule, 
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  standalone: true
})
export class ReviewComponent implements OnInit {

  value!: number;

  constructor() { }

  ngOnInit() {
  }

}
