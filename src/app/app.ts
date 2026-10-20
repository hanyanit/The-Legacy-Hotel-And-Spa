import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Whatsapp } from "./shared/whatsapp/whatsapp";
import { Footer } from './shared/footer/footer';
import { Navigation } from './shared/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Whatsapp, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('The-Legacy-Hotel-And-Spa');
}
