import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  imports: [
    MatButtonModule
  ],
  styleUrls: ['./nav-bar.component.css'],
  standalone: true
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
