import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-many-person',
  templateUrl: './many-person.component.html',
  styleUrls: ['./many-person.component.css'],
  standalone: true,
  imports:[MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule]
})
export class ManyPersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
