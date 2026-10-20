import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';   // <-- add this

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule],                        // <-- add this
  templateUrl: './page-hero.html',
  styleUrls: ['./page-hero.scss'],
})
export class PageHero {
  @Input() eyebrow: string = '';
  @Input() title: string = '';
  @Input() paragraph: string = '';
}