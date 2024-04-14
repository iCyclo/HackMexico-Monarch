import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  imports: [
    RouterLink,
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
