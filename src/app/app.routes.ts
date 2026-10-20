import { Routes } from "@angular/router";
import { ContactUs } from "./pages/contact-us/contact-us";
import { Faq } from "./pages/faq/faq";
import { Index } from "./pages/index";
import { PageNotFound } from "./pages/page-not-found/page-not-found";
import { Reviews } from "./pages/reviews/reviews";
import { SpecialOffers } from "./pages/special-offers/special-offers";
import { Gallery } from "./pages/gallery/gallery";
import { Rooms } from "./pages/rooms/rooms";
import { Spa } from "./pages/spa/spa";
import { Jobs } from "./pages/jobs/jobs";

export const routes: Routes = [
  {
    path: '',
    title: 'The Legacy Hotel & Spa',
    component: Index,
  },
  {
    path: 'rooms',
    title: 'Rooms | The Legacy Hotel & Spa',
    component: Rooms,
  },
  {
    path: 'spa',
    title: 'Spa | The Legacy Hotel & Spa',
    component: Spa,
  },
  {
    path: 'gallery',
    title: 'Gallery | The Legacy Hotel & Spa',
    component: Gallery,
  },
  {
    path: 'reviews',
    title: 'Reviews | The Legacy Hotel & Spa',
    component: Reviews,
  },
  {
    path: 'faq',
    title: 'FAQ | The Legacy Hotel & Spa',
    component: Faq,
  },
  {
    path: 'jobs',
    title: 'Jobs | The Legacy Hotel & Spa',
    component: Jobs,
  },
  {
    path: 'contact-us',
    title: 'Contact Us | The Legacy Hotel & Spa',
    component: ContactUs,
  },
  {
    path: '**',
    title: 'Page Not Found | The Legacy Hotel & Spa',
    component: PageNotFound,
  },
];