import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CallToAction } from '../../shared/call-to-action/call-to-action';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-special-offers',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHero],
  templateUrl: './special-offers.html',
  styleUrls: ['./special-offers.scss'],
})
export class SpecialOffers {
  readonly code = 'R100-OFF';
  copied = false;

  copyCode(): void {
    navigator.clipboard.writeText(this.code).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 1800);
    });
  }
}