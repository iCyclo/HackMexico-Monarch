import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css'], 
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule
  ]
})
export class CountrySelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
