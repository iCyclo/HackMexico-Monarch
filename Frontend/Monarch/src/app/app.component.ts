import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    
    MatInputModule,
    MatFormField,

    NavBarComponent,
    FooterComponent
  ],
  providers: [
    provideAnimations()
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Monarch';
}
