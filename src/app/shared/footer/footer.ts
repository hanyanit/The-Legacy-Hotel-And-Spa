import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocial {
  icon: string;
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer {

  /* ==========================================================================
     CURRENT YEAR
     ========================================================================== */

  readonly year: number = new Date().getFullYear();


  /* ==========================================================================
     EXPLORE LINKS
     ========================================================================== */

  readonly exploreLinks: FooterLink[] = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Rooms',
      href: '/rooms'
    },
    {
      label: 'Spa',
      href: '/spa'
    },
    {
      label: 'Gallery',
      href: '/gallery'
    },
    {
      label: 'Reviews',
      href: '/reviews'
    },
    {
      label: 'FAQ',
      href: '/faq'
    },
    {
      label: 'Jobs',
      href: '/jobs'
    },
    {
      label: 'Contact Us',
      href: '/contact-us'
    },
  ];


  /* ==========================================================================
     SOCIAL LINKS
     ========================================================================== */

  readonly socials: FooterSocial[] = [
    {
      icon: 'fa-brands fa-instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/thelegacyhotelandspa/?hl=en'
    },
    {
      icon: 'fa-brands fa-facebook-f',
      label: 'Facebook',
      href: '#'
    },
    {
      icon: 'fa-brands fa-x-twitter',
      label: 'Twitter / X',
      href: '#'
    },
    {
      icon: 'fa-brands fa-linkedin-in',
      label: 'LinkedIn',
      href: '#'
    },
  ];


  /* ==========================================================================
     LEGAL COMPLIANCE
     ========================================================================== */

  readonly legalLinks: FooterLink[] = [
    {
      label: 'Privacy Policy',
      href: '/privacy-policy'
    },
    {
      label: 'Terms & Conditions',
      href: '/terms-of-service'
    },
    {
      label: 'POPIA Compliance',
      href: '/popia-compliance'
    },
    {
      label: 'Cookie Policy',
      href: '/cookie-policy'
    },
  ];

}