import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-arrive-place',
  templateUrl: './arrive-place.component.html',
  styleUrls: ['./arrive-place.component.css'],
  standalone: true,
  imports:[
    MatFormFieldModule, MatSelectModule
  ]
})
export class ArrivePlaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
