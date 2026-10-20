import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PageHero } from '../../shared/page-hero/page-hero';

interface Category {
  id: string;
  name: string;
}

interface Review {
  platform: string;
  platformLogo: string;
  badgeClass: string;
  rating: number;
  category: string;
  categoryLabel: string;
  text: string;
  name: string;
  initials: string;
  date: string;
  stayType: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    CommonModule,
    PageHero
  ],
  templateUrl: './reviews.html',
  styleUrls: ['./reviews.scss'],
})
export class Reviews {

  activeCategory = 'all';

  /* ================================================================
     CATEGORIES
     ================================================================ */

  readonly categories: Category[] = [
    { id: 'all',        name: 'All Reviews' },
    { id: 'rooms',      name: 'Rooms' },
    { id: 'spa',        name: 'Spa' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'service',    name: 'Service' },
    { id: 'location',   name: 'Location' },
  ];

  /* ================================================================
     REVIEWS
     ================================================================ */

  readonly reviews: Review[] = [

    {
      platform: 'booking',
      platformLogo: '/images/reviews/booking.png',
      badgeClass: 'platform-booking',
      rating: 5,
      category: 'rooms',
      categoryLabel: 'Rooms',
      text: 'The rooms were spacious and spotless, with great décor and crisp bed sheets. The staff at the front desk were exceptionally friendly.',
      name: 'Karabo',
      initials: 'K',
      date: 'August 2026',
      stayType: 'Double Bedroom',
    },

    {
      platform: 'booking',
      platformLogo: '/images/reviews/booking.png',
      badgeClass: 'platform-booking',
      rating: 5,
      category: 'spa',
      categoryLabel: 'Spa',
      text: 'Absolutely loved my stay at Legacy Hotel and Spa. The rooms were luxurious, the staff was friendly and attentive, and the spa treatments were top-notch. Perfect for relaxation and rejuvenation.',
      name: 'Makwela',
      initials: 'M',
      date: 'July 2026',
      stayType: 'The Golden Standard Suite',
    },

    {
      platform: 'airbnb',
      platformLogo: '/images/reviews/airbnb.png',
      badgeClass: 'platform-airbnb',
      rating: 5,
      category: 'service',
      categoryLabel: 'Service',
      text: 'The location was amazing! The building is stunning. The rooms are very spacious. The staff? 10/10! Communication was clear and there was quick response. The breakfast was delicious.',
      name: 'Masechaba',
      initials: 'M',
      date: 'June 2026',
      stayType: 'Single Bedroom',
    },

    {
      platform: 'tripadvisor',
      platformLogo: '/images/reviews/tripadvisor.png',
      badgeClass: 'platform-tripadvisor',
      rating: 4,
      category: 'location',
      categoryLabel: 'Location',
      text: 'Easy to find, quiet surroundings and close enough to everything we needed in Tzaneen. Would have liked a slightly earlier check-in.',
      name: 'Thabo S.',
      initials: 'TS',
      date: 'June 2026',
      stayType: 'Double Bedroom',
    },

    {
      platform: 'google',
      platformLogo: '/images/reviews/google.png',
      badgeClass: 'platform-google',
      rating: 5,
      category: 'facilities',
      categoryLabel: 'Facilities',
      text: 'Great breakfast spread each morning and the shared spaces were always spotless. Excellent value for what is on offer.',
      name: 'Michael D.',
      initials: 'MD',
      date: 'April 2026',
      stayType: 'Single Bedroom',
    },

    {
      platform: 'booking',
      platformLogo: '/images/reviews/booking.png',
      badgeClass: 'platform-booking',
      rating: 5,
      category: 'service',
      categoryLabel: 'Service',
      text: 'High-quality service, exceptional customer care, efficient operations, and a positive brand image. ❤️',
      name: 'Karabo',
      initials: 'K',
      date: 'May 2026',
      stayType: 'Double Bedroom',
    },

    {
      platform: 'google',
      platformLogo: '/images/reviews/google.png',
      badgeClass: 'platform-google',
      rating: 5,
      category: 'spa',
      categoryLabel: 'Spa',
      text: 'The spa treatment is top tier. The service was top tier, the rooms were immaculate, and the perfect location for this hotel. The staff were very friendly and the spa was a 10/10.',
      name: 'Nhlamulo Mathebula',
      initials: 'NM',
      date: 'March 2026',
      stayType: 'The Golden Standard Suite',
    },

    {
      platform: 'booking',
      platformLogo: '/images/reviews/booking.png',
      badgeClass: 'platform-booking',
      rating: 4,
      category: 'facilities',
      categoryLabel: 'Facilities',
      text: 'Me and my partner had a lovely stay. The rooms are modern and clean. They have a restaurant on site with really good dishes and a good variety of cocktails. We enjoyed the swimming pool too.',
      name: 'Masebu',
      initials: 'M',
      date: 'February 2026',
      stayType: 'Double Bedroom',
    },

    {
      platform: 'tripadvisor',
      platformLogo: '/images/reviews/tripadvisor.png',
      badgeClass: 'platform-tripadvisor',
      rating: 5,
      category: 'spa',
      categoryLabel: 'Spa',
      text: 'They went over and beyond to help make our stay enjoyable. The premium amenities with spa and wellness facilities offered us an excellent experience.',
      name: 'Anonymous',
      initials: 'A',
      date: 'January 2026',
      stayType: 'The Golden Standard Suite',
    },

    {
      platform: 'booking',
      platformLogo: '/images/reviews/booking.png',
      badgeClass: 'platform-booking',
      rating: 5,
      category: 'rooms',
      categoryLabel: 'Rooms',
      text: 'The property\'s look is remarkable, combining modern appeal with sophisticated design. The place was clean, the staff were friendly and welcoming, the food and the ambience was great.',
      name: 'Moloto',
      initials: 'M',
      date: 'December 2025',
      stayType: 'Single Bedroom',
    },

  ];

  /* ================================================================
     FILTERED REVIEWS
     ================================================================ */

  get filteredReviews(): Review[] {
    if (this.activeCategory === 'all') {
      return this.reviews;
    }
    return this.reviews.filter(
      (review) => review.category === this.activeCategory
    );
  }

  /* ================================================================
     CHANGE CATEGORY
     ================================================================ */

  setCategory(id: string): void {
    this.activeCategory = id;
  }

  /* ================================================================
     ACTIVE CATEGORY NAME
     ================================================================ */

  getActiveCategoryName(): string {
    return (
      this.categories.find(
        (category) => category.id === this.activeCategory
      )?.name ?? ''
    );
  }

}