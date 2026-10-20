import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHero } from '../../shared/page-hero/page-hero';

interface Offer {
  title: string;
  image: string;
}

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, PageHero],
  templateUrl: './jobs.html',
  styleUrls: ['./jobs.scss'],
})
export class Jobs {
  readonly offers: Offer[] = [
    { title: 'Messenger/Driver', image: 'images/jobs/driver.jpg' },
    { title: 'Junior Bookkeeper', image: 'images/jobs/junior-bookkeeper.jpg' },
  ];
}