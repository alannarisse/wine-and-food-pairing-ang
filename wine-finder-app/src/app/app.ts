import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { WineFinderComponent } from './components/wine-finder/wine-finder.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, WineFinderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
