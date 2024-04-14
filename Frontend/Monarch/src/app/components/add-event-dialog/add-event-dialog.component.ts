import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { ItineraryEvent } from '../../types/itinerary-event.type';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReviewComponent } from '../review/review.component';



@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ServiceCardComponent,
    MatExpansionModule,
    ReviewComponent
  ]
})
export class AddEventDialogComponent implements OnInit {

  services!: ItineraryEvent[]

  constructor(private dialogRef: MatDialogRef<AddEventDialogComponent>) { }

  ngOnInit() {
    this.services = [{
      id: 1,
      name: 'Museum 1',
      imgPath: "",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus perspiciatis impedit exercitationem, accusantium",
      disabilities: [],
      price: 70,
      reviews: [
        { comment: "Un lugar poco accesible.", stars: 2 },
        { comment: "Un lugar muy culero.", stars: 1 },
      ],
    }]
  }

  add(event : ItineraryEvent){
    this.dialogRef.close(event)
  }

}
