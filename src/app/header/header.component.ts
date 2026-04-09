import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  toggleDarkMode() {
    let element = document.querySelector('html');
    element!.classList.toggle('my-app-dark');
  }
}
