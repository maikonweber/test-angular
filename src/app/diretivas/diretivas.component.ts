import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css'
})
export class DiretivasComponent {
  canShow: boolean = false
}
