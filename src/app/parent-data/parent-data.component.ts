import { Component, Input } from '@angular/core';
import { KlbService } from '../klb.service';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
  constructor(private service: KlbService) {

  }
  @Input() name = "Joaquim"

  removeAnimal (animal: any) {
    console.log(animal)
  }
}
