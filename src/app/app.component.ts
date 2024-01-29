import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ParentDataComponent } from './parent-data/parent-data.component';
import { DiretivasComponent } from './diretivas/diretivas.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, ParentDataComponent, DiretivasComponent]
})
export class AppComponent {
  title = 'angular-curso';
  userName = "Joaquim"
}
