import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PageHero } from '../../shared/page-hero/page-hero';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PageHero
  ],
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.scss'],
})
export class ContactUs {

  /* ==========================================================================
     CONTACT FORM
     ========================================================================== */

  form: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };


  /* ==========================================================================
     SUBMIT FORM
     ========================================================================== */

  submitForm(): void {

    console.log('Contact form submitted:', this.form);

    /*
     * Connect this method to your backend/email service later.
     *
     * For example:
     * - Django API
     * - Formspree
     * - EmailJS
     * - Supabase Edge Function
     *
     * At the moment this simply logs the submitted
     * information to the browser console.
     */

  }

}