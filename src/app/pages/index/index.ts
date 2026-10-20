import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CallToAction } from '../../shared/call-to-action/call-to-action';

/* ============================================================
   TYPES — mirrors rooms.ts / reviews.ts
   ============================================================ */

export interface RoomAmenity {
  icon: string;
  label: string;
}

export interface Room {
  name: string;
  price: number;              // room only, per night
  breakfastPrice: number;     // with breakfast, per night
  maxOccupancy: string;
  roomSize: string;
  description: string;
  imageUrl: string;
  occupancyIcon: string;
  sizeIcon: string;
  amenities: RoomAmenity[];
}

interface AmenityItem {
  icon: string;
  label: string;
}

interface NearbyPlace {
  name: string;
  distance: string;
}

interface ReviewPreview {
  platform: string;
  platformLogo: string;
  rating: number;
  text: string;
  name: string;
  date: string;
  stayType: string;
}

/* ============================================================
   SHARED ROOM AMENITIES (same set as the Rooms page)
   ============================================================ */

const COMMON_AMENITIES: RoomAmenity[] = [
  { icon: 'images/icons/wifi.png', label: 'Free Wi-Fi' },
  { icon: 'images/icons/bar-fridge.png', label: 'Bar fridge' },
  { icon: 'images/icons/shower.png', label: 'Shower' },
  { icon: 'images/icons/smart-tv.png', label: 'TV' },
  { icon: 'images/icons/desk2.png', label: 'Study desk' },
  { icon: 'images/icons/security.png', label: 'Security' },
  { icon: 'images/icons/coffee-machine.png', label: 'Coffee machine' },
];

const BATHTUB_AMENITY: RoomAmenity = {
  icon: 'images/icons/bathtub.png',
  label: 'Bathtub',
};

function buildAmenities(bedAmenity: RoomAmenity, withBathtub: boolean): RoomAmenity[] {
  return withBathtub
    ? [bedAmenity, ...COMMON_AMENITIES, BATHTUB_AMENITY]
    : [bedAmenity, ...COMMON_AMENITIES];
}

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterLink, CallToAction],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class Index {

  /* ================================================================
     ROOMS PREVIEW — first 3, cheapest first (mirrors rooms.ts)
     ================================================================ */

  readonly rooms: Room[] = [

    {
      name: 'Standard Room',
      price: 1350,
      breakfastPrice: 1750,

      maxOccupancy: '2 persons',
      roomSize: '42 m²',

      description:
        'Experience elevated comfort in The Golden Standard Suite. Carefully designed with generous living spaces and premium finishes, this suite offers a luxurious and relaxing environment for guests seeking an exceptional stay.',

      imageUrl: 'images/rooms/2.jpg',

      occupancyIcon: 'images/icons/guests.png',
      sizeIcon: 'images/icons/size.png',

      amenities: buildAmenities(
        { icon: 'images/icons/bed.png', label: 'Premium bedding' },
        false
      ),
    },

    {
      name: 'King Room',
      price: 1850,
      breakfastPrice: 2150,

      maxOccupancy: '4 persons',
      roomSize: '42 m²',

      description:
        'Our King Rooms feature a comfortable king-size bed and are perfectly suited for families seeking a relaxing and memorable getaway. Spacious and welcoming, they comfortably accommodate a family of four.',

      imageUrl: 'images/rooms/5.jpg',

      occupancyIcon: 'images/icons/guests.png',
      sizeIcon: 'images/icons/size.png',

      amenities: buildAmenities(
        { icon: 'images/icons/bed.png', label: 'King-size bed' },
        true
      ),
    },

    {
      name: 'Executive Room',
      price: 2200,
      breakfastPrice: 2550,

      maxOccupancy: '2 persons',
      roomSize: '50 m²',

      description:
        'Our Executive Rooms offer spacious and comfortable accommodation with a luxurious king-size bed, making them ideal for both business and leisure travellers. Each room is thoughtfully designed to provide a relaxing and memorable stay.',

      imageUrl: 'images/rooms/8.jpg',

      occupancyIcon: 'images/icons/guests.png',
      sizeIcon: 'images/icons/size.png',

      amenities: buildAmenities(
        { icon: 'images/icons/blankets.png', label: 'King-size bed' },
        true
      ),
    },

  ];


  /* ================================================================
     FACILITY AMENITIES — property-wide (14 icons)
     ================================================================ */

  readonly amenities: AmenityItem[] = [
    { icon: 'images/icons/wifi.png', label: 'Free Wi-Fi' },
    { icon: 'images/icons/cctv.png', label: '24/7 CCTV' },
    { icon: 'images/icons/parking.png', label: 'Secure Parking' },
    { icon: 'images/icons/guard.png', label: '24/7 Security Guards' },
    { icon: 'images/icons/reception.png', label: '24/7 Reception' },
    { icon: 'images/icons/public-tv.png', label: 'Public TV' },
    { icon: 'images/icons/spa.png', label: 'Spa & Wellness' },
    { icon: 'images/icons/pool.png', label: 'Swimming Pool' },
    { icon: 'images/icons/ashtray.png', label: 'Smoking Areas' },
    { icon: 'images/icons/bar.png', label: 'Bar' },
    { icon: 'images/icons/restaurant.png', label: 'On-Site Restaurant' },
    { icon: 'images/icons/confrence.png', label: 'Confrence Room' },
  ];


  /* ================================================================
     NEARBY — proximity to key places

     NOTE: these distances are placeholders. Replace each one with
     the real drive time / distance before going live.
     ================================================================ */

  readonly nearby: NearbyPlace[] = [
    { name: 'Tzaneen Lifestyle Mall', distance: '5 min drive' },
    { name: 'Mediclinic Tzaneen', distance: '7 min drive' },
    { name: 'Tzaneen CBD', distance: '6 min drive' },
    { name: 'Tzaneen Dam Nature Reserve', distance: '10 min drive' },
    { name: 'Agatha Forest Reserve', distance: '20 min drive' },
    { name: 'Polokwane International Airport', distance: '1 hr 30 min drive' },
  ];


  /* ================================================================
     REVIEWS PREVIEW — best from Booking.com, Airbnb, TripAdvisor
     ================================================================ */

  readonly reviews: ReviewPreview[] = [

    {
      platform: 'booking',
      platformLogo: '/images/reviews/booking.png',
      rating: 5,
      text: 'Absolutely loved my stay at Legacy Hotel and Spa. The rooms were luxurious, the staff was friendly and attentive, and the spa treatments were top-notch. Perfect for relaxation and rejuvenation.',
      name: 'Makwela',
      date: 'July 2026',
      stayType: 'The Golden Standard Suite',
    },

    {
      platform: 'airbnb',
      platformLogo: '/images/reviews/airbnb.png',
      rating: 5,
      text: 'The location was amazing! The building is stunning. The rooms are very spacious. The staff? 10/10! Communication was clear and there was quick response. The breakfast was delicious.',
      name: 'Masechaba',
      date: 'June 2026',
      stayType: 'Single Bedroom',
    },

    {
      platform: 'tripadvisor',
      platformLogo: '/images/reviews/tripadvisor.png',
      rating: 5,
      text: 'They went over and beyond to help make our stay enjoyable. The premium amenities with spa and wellness facilities offered us an excellent experience.',
      name: 'Anonymous',
      date: 'January 2026',
      stayType: 'The Golden Standard Suite',
    },

  ];

}