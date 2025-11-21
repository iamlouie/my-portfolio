import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = 'LOUIE NUEZ';
  title = 'Full Stack Developer';
  description = 'Passionate about creating beautiful, functional web applications that make a difference.';
}
