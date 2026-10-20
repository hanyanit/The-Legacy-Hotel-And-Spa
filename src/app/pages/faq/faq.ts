import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CallToAction } from '../../shared/call-to-action/call-to-action';
import { PageHero } from '../../shared/page-hero/page-hero';

interface FaqCategory {
  id: string;
  name: string;
}

interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, CallToAction, PageHero],
  templateUrl: './faq.html',
  styleUrls: ['./faq.scss'],
})
export class Faq {
  activeCategory = 'general';
  openFaqIndex: number | null = null;

  readonly categories: FaqCategory[] = [
    { id: 'general', name: 'General Information' },
    { id: 'booking', name: 'Bookings & Payments' },
    { id: 'check-in', name: 'Check-in & Check-out' },
    { id: 'rooms', name: 'Rooms & Accommodation' },
    { id: 'facilities', name: 'Facilities & Services' },
  ];

  readonly faqs: FaqItem[] = [
    // General Information
    {
      category: 'general',
      question: 'Where is The Legacy Hotel & Spa located?',
      answer:
        'The Legacy Hotel & Spa is located in Tzaneen, Limpopo, close to the Tzaneen Dam Nature Reserve and the Agatha Forest Reserve. Please visit our Contact Us page or contact our team directly for detailed directions.',
    },
    {
      category: 'general',
      question: 'Is the hotel suitable for business and leisure travellers?',
      answer:
        'Yes. Our accommodation is designed to suit both business and leisure travellers. Whether you are visiting for work, a weekend getaway or a family holiday, we offer comfortable spaces designed for a relaxing stay.',
    },
    {
      category: 'general',
      question: 'Is The Legacy Hotel & Spa suitable for families?',
      answer:
        'Yes. We offer accommodation options suitable for couples, families and groups. Our King Room comfortably accommodates a family of up to four guests.',
    },
    // Bookings & Payments
    {
      category: 'booking',
      question: 'How can I make a booking?',
      answer:
        'You can submit a booking enquiry through our website or contact The Legacy Hotel & Spa directly. Our team will assist you with room availability, accommodation options and your reservation.',
    },
    {
      category: 'booking',
      question: 'How far in advance should I book?',
      answer:
        'We recommend booking as early as possible, particularly during weekends, holidays and busy travel periods. Booking in advance helps ensure that your preferred room is available.',
    },
    {
      category: 'booking',
      question: 'What is your cancellation policy?',
      answer:
        'Cancellation policies may depend on the type of booking and reservation made. We recommend contacting our team directly for the cancellation terms applicable to your stay.',
    },
    {
      category: 'booking',
      question: 'Do you require a deposit to secure a booking?',
      answer:
        'Deposit requirements may apply depending on your reservation. Our team will provide you with the relevant payment and booking information when confirming your stay.',
    },
    // Check-in & Check-out
    {
      category: 'check-in',
      question: 'What time is check-in?',
      answer:
        'Please contact our reception team to confirm the applicable check-in time for your reservation. Our team will also assist you with any special arrival arrangements.',
    },
    {
      category: 'check-in',
      question: 'What time is check-out?',
      answer:
        'Check-out information will be confirmed with you during your stay. Please speak to reception should you require any special arrangements.',
    },
    {
      category: 'check-in',
      question: 'Can I request an early check-in?',
      answer:
        'Early check-in requests are subject to room availability. We recommend contacting us before your arrival so that we can assist where possible.',
    },
    {
      category: 'check-in',
      question: 'Can I request a late check-out?',
      answer:
        'Late check-out may be available depending on room availability and upcoming reservations. Please speak to our reception team to make a request.',
    },
    // Rooms & Accommodation
    {
      category: 'rooms',
      question: 'What types of accommodation do you offer?',
      answer:
        'The Legacy Hotel & Spa offers four room types: the Standard Suite, Twin Room, King Room and Executive Room, each available with or without breakfast.',
    },
    {
      category: 'rooms',
      question: 'How many guests can the rooms accommodate?',
      answer:
        'Room capacity depends on the accommodation selected. Our Standard Suite and Twin Room each accommodate up to two guests, while our King Room comfortably accommodates up to four guests.',
    },
    {
      category: 'rooms',
      question: 'What amenities are available in the rooms?',
      answer:
        'Every room includes free Wi-Fi, a bar fridge, a shower, a TV, a study desk, security and a coffee machine. Our King Room and Executive Room also feature a bathtub.',
    },
    {
      category: 'rooms',
      question: 'Do you offer rooms with king-size beds?',
      answer:
        'Yes. Both our King Room and Executive Room feature comfortable king-size beds designed for a relaxing and restful stay.',
    },
    // Facilities & Services
    {
      category: 'facilities',
      question: 'What facilities are available at the hotel?',
      answer:
        'The Legacy Hotel & Spa offers a range of facilities designed to make your stay comfortable and enjoyable. Please contact our team for the latest information regarding facilities and services available during your visit.',
    },
    {
      category: 'facilities',
      question: 'Is parking available for guests?',
      answer:
        'Yes, on-site parking is available for guests. Please contact the hotel directly to confirm any specific arrangements that may apply during your stay.',
    },
    {
      category: 'facilities',
      question: 'Do you offer spa services?',
      answer:
        'Yes. Please visit our Spa page for our signature treatments, or contact our team directly for information regarding available treatments and booking arrangements.',
    },
    {
      category: 'facilities',
      question: 'Is breakfast included with my stay?',
      answer:
        'Breakfast is available as an add-on for each of our room types at an additional nightly rate. Please see the Rooms page for current pricing, or let us know when making your reservation.',
    },
    {
      category: 'facilities',
      question: 'Can the hotel accommodate special requests?',
      answer:
        'We will always do our best to accommodate reasonable special requests. Please let us know about your requirements when making your booking or before your arrival.',
    },
  ];

  get filteredFaqs(): FaqItem[] {
    return this.faqs.filter((faq) => faq.category === this.activeCategory);
  }

  selectCategory(categoryId: string): void {
    this.activeCategory = categoryId;
    this.openFaqIndex = null;
  }

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }

  getActiveCategoryName(): string {
    return (
      this.categories.find((category) => category.id === this.activeCategory)
        ?.name ?? ''
    );
  }
}