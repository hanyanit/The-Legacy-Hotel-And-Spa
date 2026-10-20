import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss'],
})
export class Navigation {

  /* ==========================================================================
     STATE
     ========================================================================== */

  menuOpen = false;
  isScrolled = false;

  /* ==========================================================================
     SCROLL STATE
     ========================================================================== */

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 10;
  }

  /* ==========================================================================
     MOBILE MENU
     ========================================================================== */

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  /* ==========================================================================
     ESCAPE KEY
     ========================================================================== */

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  /* ==========================================================================
     CLOSE MOBILE MENU WHEN RESIZING TO DESKTOP
     ========================================================================== */

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 850) {
      this.menuOpen = false;
    }
  }
}