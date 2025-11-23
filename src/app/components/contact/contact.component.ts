import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
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
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  isFormValid(): boolean {
    return this.contactForm.name.trim() !== '' && 
           this.contactForm.email.trim() !== '' && 
           this.contactForm.message.trim() !== '';
  }

  onSubmitContact(event: Event) {
    event.preventDefault();
    
    const subject = encodeURIComponent(`Portfolio Contact from ${this.contactForm.name}`);
    const body = encodeURIComponent(`Name: ${this.contactForm.name}\nEmail: ${this.contactForm.email}\n\nMessage:\n${this.contactForm.message}`);
    const mailtoLink = `mailto:iamlouienuez@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
  }
}
