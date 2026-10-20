import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

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

/* ============================================================
   SHARED AMENITIES
   Every room includes these. Bathtub is added only for rooms
   that have one (see `withBathtub` below).
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
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, PageHero],
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss'],
})
export class Rooms {
  /* =====================================================================
     Rooms are listed ascending by room-only price (cheapest first).
     Flip `.sort()` below to `(b, a) => a.price - b.price` for descending.
     ===================================================================== */

  readonly rooms: Room[] = [

    /* =====================================================================
       STANDARD SUITE
       ===================================================================== */

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

    /* =====================================================================
       TWIN ROOM
       ===================================================================== */

    {
      name: 'Twin Room',
      price: 1660,
      breakfastPrice: 2060,

      maxOccupancy: '2 persons',
      roomSize: '42 m²',

      description:
        'Our Twin Rooms feature two comfortable single beds, ideal for friends or colleagues travelling together who each want their own space in a bright, welcoming room.',

      imageUrl: 'images/rooms/9.jpg',

      occupancyIcon: 'images/icons/guests.png',
      sizeIcon: 'images/icons/size.png',

      amenities: buildAmenities(
        { icon: 'images/icons/single-bed.png', label: 'Two single beds' },
        false
      ),
    },

    /* =====================================================================
       KING ROOM
       ===================================================================== */

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

    /* =====================================================================
       EXECUTIVE ROOM
       ===================================================================== */

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

  ].sort((a, b) => a.price - b.price);
}