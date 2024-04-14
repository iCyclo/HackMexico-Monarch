import { Component, OnInit } from '@angular/core';
import { TimelineComponent } from '../../components/timeline/timeline.component';

@Component({
  selector: 'app-make-itinerary',
  templateUrl: './make-itinerary.component.html',
  styleUrls: ['./make-itinerary.component.css'],
  standalone: true,
  imports: [TimelineComponent],
})
export class MakeItineraryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
