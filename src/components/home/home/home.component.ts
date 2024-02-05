import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


 //add page try
 constructor(private router: Router, 
  @Inject(DOCUMENT) private document: Document,
  @Inject(PLATFORM_ID) private platformId: Object
  ) { }

 goToPage(pageName: String): void {

   this.router.navigate([`${pageName}`]);
 }



  // realtime_tracking
  ngOnInit() {
    this.showCustomFrame(0);
    this.showTestimonials()

    
  }

  // ngAfterViewInit(){
    
  // }


  showCustomFrame(index: number): void {
    // if (isPlatformBrowser(this.platformId)) {
      const frames = document.querySelectorAll('.custom-frame-container');
      frames.forEach(frame => frame.classList.remove('active'));
  
      const selectedFrame = document.getElementById('custom-frame' + index);
      if (selectedFrame) {
        selectedFrame.classList.add('active');
      }
  
      const buttons = document.querySelectorAll('.custom-button');
      buttons.forEach(button => button.classList.remove('active'));
      buttons[index].classList.add('active');
    // }
  }

  // biotech
  activeButton: number = 1;
  contentTitle: string = 'Effortlessly manage your valuable lab assets.';
  contentDescription: string = 'learn more ->';
  showContent(buttonNumber: number): void {
    this.activeButton = buttonNumber;
    this.contentTitle = `Content for Button ${buttonNumber}`;
    this.contentDescription = `This is the content related to Button ${buttonNumber}.`;
  }


  // for assureasst
  activeTab: number = 0;
  showCustomTab(index: number): void {
    this.activeTab = index;
  }




 


  //slider code
  testimonials = [
    {
      content: "1 AssetCues has been an invaluable asset to our asset management strategy. As the CFO of ABC Pharmaceuticals, I've witnessed remarkable improvements in efficiency and ROI.",
      image: "../assets/company.PNG",
      name: "1John Doe",
      position: "1CFO, ABC Pharmaceuticals",
      class: 'slide-1'
    },
    {
      content: "2 AssetCues has been an invaluable asset to our asset management strategy. As the CFO of ABC Pharmaceuticals, I've witnessed remarkable improvements in efficiency and ROI.",
      image: "../assets/company.PNG",
      name: "2John Doe",
      position: "2CFO, ABC Pharmaceuticals",
      class: 'slide-2'
    },
    {
      content: "3 AssetCues has been an invaluable asset to our asset management strategy. As the CFO of ABC Pharmaceuticals, I've witnessed remarkable improvements in efficiency and ROI.",
      image: "../assets/company.PNG",
      name: "3John Doe",
      position: "3CFO, ABC Pharmaceuticals",
      class: 'slide-3'

    },
    {
      content: "4 AssetCues has been an invaluable asset to our asset management strategy. As the CFO of ABC Pharmaceuticals, I've witnessed remarkable improvements in efficiency and ROI.",
      image: "../assets/company.PNG",
      name: "4John Doe",
      position: "4CFO, ABC Pharmaceuticals",
      class: 'slide-4'

    },
    // Add more testimonials as needed
  ];

  testimonialIndex = 0;
  dots = Array(this.testimonials.length).fill(null);

  showTestimonials(): void {
    setInterval(() => {
      this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonials.length;
    }, 4000);
  }

  changeTestimonial(index: number): void {
    this.testimonialIndex = index;
  }


}

