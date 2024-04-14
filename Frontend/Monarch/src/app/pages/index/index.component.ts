import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { ReviewComponent } from '../../components/review/review.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,

    ServiceCardComponent,
    ReviewComponent
  ],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
