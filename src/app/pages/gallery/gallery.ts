 import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

interface GalleryCategory {
  id: string;
  name: string;
}

interface GalleryImage {
  category: string;
  alt: string;
  imageUrl: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, PageHero],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss'],
})
export class Gallery {
  activeCategory = 'all';
  selectedImageIndex: number | null = null;

  readonly categories: GalleryCategory[] = [
    { id: 'all', name: 'All' },
    { id: 'interior', name: 'Interior' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'exterior', name: 'Exterior' },
  ];

  readonly images: GalleryImage[] = [
    { category: 'exterior', alt: 'Luxury hotel experience', imageUrl: 'images/exterior/10.jpg' },
    { category: 'exterior', alt: 'Luxury hotel experience', imageUrl: 'images/exterior/1.jpg' },
    { category: 'exterior', alt: 'Luxury hotel experience', imageUrl: 'images/exterior/9.jpg' },
    { category: 'exterior', alt: 'Luxury hotel experience', imageUrl: 'images/exterior/8.jpg' },
    { category: 'exterior', alt: 'Luxury hotel experience', imageUrl: 'images/exterior/13.jpg' },
    { category: 'exterior', alt: 'Luxury hotel experience', imageUrl: 'images/exterior/12.jpg' },
    { category: 'exterior', alt: 'Luxury hotel experience', imageUrl: 'images/exterior/11.jpg' },
    { category: 'exterior', alt: 'Luxury hotel experience', imageUrl: 'images/exterior/3.jpg' },
    { category: 'exterior', alt: 'Luxury hotel experience', imageUrl: 'images/exterior/4.jpg' },


    { category: 'interior', alt: 'Hotel facilities', imageUrl: 'images/interior/16.jpg' },
    { category: 'interior', alt: 'Hotel facilities', imageUrl: 'images/interior/18.jpg' },
    { category: 'interior', alt: 'Hotel facilities', imageUrl: 'images/interior/3.jpg' },
    { category: 'interior', alt: 'Hotel facilities', imageUrl: 'images/interior/19.jpg' },
    { category: 'interior', alt: 'Hotel facilities', imageUrl: 'images/interior/22.jpg' },
    { category: 'interior', alt: 'Hotel facilities', imageUrl: 'images/interior/6.jpg' },
    { category: 'interior', alt: 'Hotel facilities', imageUrl: 'images/interior/7.jpg' },
    { category: 'interior', alt: 'Hotel facilities', imageUrl: 'images/interior/17.jpg' },
    { category: 'interior', alt: 'Hotel facilities', imageUrl: 'images/interior/8.jpg' },
    { category: 'interior', alt: 'Hotel facilities', imageUrl: 'images/interior/14.jpg' },
    { category: 'interior', alt: 'Hotel facilities', imageUrl: 'images/interior/13.jpg' },
    
    
    { category: 'rooms', alt: 'Luxury suite', imageUrl: 'images/rooms/21.jpg' },
    { category: 'rooms', alt: 'Luxury suite', imageUrl: 'images/rooms/13.jpg' },
    { category: 'rooms', alt: 'Luxury suite', imageUrl: 'images/rooms/12.jpg' },
    { category: 'rooms', alt: 'Luxury suite', imageUrl: 'images/rooms/22.jpg' },
    { category: 'rooms', alt: 'Luxury suite', imageUrl: 'images/rooms/11.jpg' },
    { category: 'rooms', alt: 'Luxury suite', imageUrl: 'images/rooms/14.jpg' },
    { category: 'rooms', alt: 'Luxury suite', imageUrl: 'images/rooms/15.jpg' },
    { category: 'rooms', alt: 'Luxury suite', imageUrl: 'images/rooms/16.jpg' },
    { category: 'rooms', alt: 'Luxury suite', imageUrl: 'images/rooms/17.jpg' },
    { category: 'rooms', alt: 'Luxury suite', imageUrl: 'images/rooms/18.jpg' },
    { category: 'rooms', alt: 'Luxury suite', imageUrl: 'images/rooms/19.jpg' },
    { category: 'rooms', alt: 'Luxury suite', imageUrl: 'images/rooms/20.jpg' },
  ];

  get filteredImages(): GalleryImage[] {
    if (this.activeCategory === 'all') {
      return this.images;
    }

    return this.images.filter(image => image.category === this.activeCategory);
  }

  get selectedImage(): GalleryImage | null {
    if (this.selectedImageIndex === null) {
      return null;
    }

    return this.filteredImages[this.selectedImageIndex] ?? null;
  }

  selectCategory(categoryId: string): void {
    this.activeCategory = categoryId;
    this.selectedImageIndex = null;
  }

  openLightbox(index: number): void {
    this.selectedImageIndex = index;
  }

  closeLightbox(): void {
    this.selectedImageIndex = null;
  }

  nextImage(): void {
    this.stepImage(1);
  }

  previousImage(): void {
    this.stepImage(-1);
  }

  private stepImage(step: number): void {
    if (this.selectedImageIndex === null) {
      return;
    }

    const total = this.filteredImages.length;
    this.selectedImageIndex = (this.selectedImageIndex + step + total) % total;
  }
}