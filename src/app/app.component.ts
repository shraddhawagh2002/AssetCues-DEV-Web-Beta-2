import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AssetInventoryComponent } from '../components/asset-audit/asset-inventory/asset-inventory.component';
import { BarcodeComponent } from '../components/asset-audit/barcode/barcode.component';
import { AlgoComponent } from '../components/barcode-based/algo/algo.component';
import { ScheduleDemoComponent } from '../components/barcode-based/schedule-demo/schedule-demo.component';
import { BlogsComponent } from '../components/common/blogs/blogs.component';
import { CaseStudiesComponent } from '../components/common/case-studies/case-studies.component';
import { CustomerSpaceComponent } from '../components/common/customer-space/customer-space.component';
import { DashboardNavbarComponent } from '../components/common/dashboard-navbar/dashboard-navbar.component';
import { CasestudiesComponent } from '../components/home/casestudies/casestudies.component';
import { GlobalEnterprisesComponent } from '../components/home/global-enterprises/global-enterprises.component';
import { HeroSectionComponent } from '../components/home/hero-section/hero-section.component';
import { HomePageVedioComponent } from '../components/home/home-page-vedio/home-page-vedio.component';
import { SideNavComponent } from '../components/home/side-nav/side-nav.component';
import { TechnologyProcessComponent } from '../components/home/technology-process/technology-process.component';
import { PerformAuditComponent } from '../components/rfid-based/perform-audit/perform-audit.component';





@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
      CommonModule, 
      RouterOutlet,       
      BlogsComponent,
      ScheduleDemoComponent,
      TechnologyProcessComponent,
      
      BlogsComponent,
      ScheduleDemoComponent,
      TechnologyProcessComponent,
      HeroSectionComponent,
      CustomerSpaceComponent,
      
      GlobalEnterprisesComponent,
      BarcodeComponent,
      
      AlgoComponent,
      PerformAuditComponent,
      SideNavComponent,
      CasestudiesComponent,
      AssetInventoryComponent,
      CaseStudiesComponent,
      DashboardNavbarComponent,
      HomePageVedioComponent
    ]
})
export class AppComponent {
  title = 'Angular-Universal';

  slides:any[]=[

    {
      url: '/assets/Exampl1.jpg' ,
      title:'first slide',
      description:'this is first slide',
    },
    {
      url: '/assets/Example2.jpg' ,
      title:'second slide',
      description:'this is 2nd slide',
    },
  ];
}
