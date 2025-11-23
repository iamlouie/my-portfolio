import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  name = 'LOUIE NUEZ';
  title = 'Full Stack Developer';
  description = 'Passionate about creating beautiful, functional web applications that make a difference.';

  ngAfterViewInit() {
    setTimeout(() => {
      this.observeElements();
    }, 100);
  }

  observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));
  }
}
