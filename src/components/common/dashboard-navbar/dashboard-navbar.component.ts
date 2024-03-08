import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SharedModule } from '../../../app/shared/shared.module';

@Component({
  selector: 'app-dashboard-navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard-navbar.component.html',
  styleUrl: './dashboard-navbar.component.scss'
})
export class DashboardNavbarComponent {

  isNavOpen: boolean = false;

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  showHamburgerMenu: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document , @Inject(PLATFORM_ID) private platformId: Object){
 
}
ngOnInit(){
 }

 isMenuOpen: boolean = false;

 toggleMenu() {
   this.isMenuOpen = !this.isMenuOpen;
 }
 
  toggleHamburgerMenu(){}
 

  isMenuOpen2: boolean = false;

  openMenu() {
    this.isMenuOpen2 = true;
  }

  closeMenu() {
    this.isMenuOpen2 = false;
  }


  //////////////////////////////////////////////////////

  isMenuOpen3: boolean = false;

  toggleMenu1() {
      this.isMenuOpen3 = !this.isMenuOpen3;
  }
  
  
}
