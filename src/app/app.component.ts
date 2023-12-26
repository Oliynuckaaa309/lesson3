import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Lesson03Component } from './lesson03/lesson03.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Lesson03Component  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  title = 'lesson3';
}
