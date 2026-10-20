import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-spa',
  standalone: true,
  imports: [CommonModule, PageHero],
  templateUrl: './spa.html',
  styleUrls: ['./spa.scss'],
})
export class Spa {}