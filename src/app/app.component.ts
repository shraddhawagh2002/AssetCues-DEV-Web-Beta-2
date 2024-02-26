import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TabLayoutOnPageComponent } from "../components/tab-layout-on-page/tab-layout-on-page.component";
import { SimpleAssetComponent } from '../components/simple-asset/simple-asset.component';
import { SideNavComponent } from '../components/side-nav/side-nav.component';
import { SmoothTransitionComponent } from '../components/smooth-transition/smooth-transition.component';
import { AccurateCalculationComponent } from '../components/accurate-calculation/accurate-calculation.component';
import { AssetVerificationComponent } from '../components/asset-verification/asset-verification.component';
import { PhysicalAssetComponent } from '../components/physical-asset/physical-asset.component';
import { LearnMoreComponent } from '../components/learn-more/learn-more.component';
import { SuccessStoryComponent } from '../components/success-story/success-story.component';
import { IntegrationsComponent } from '../components/integrations/integrations.component';
import { ManagedServicesComponent } from '../components/managed-services/managed-services.component';
import { HomeComponent } from '../components2/home/home.component';
import { BlogsComponent } from '../components2/blogs/blogs.component';
import { ScheduleDemoComponent } from '../components2/schedule-demo/schedule-demo.component';
import { TechnologyProcessComponent } from '../components2/technology-process/technology-process.component';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
      CommonModule, 
      RouterOutlet,       
      TabLayoutOnPageComponent, 
      SimpleAssetComponent,
      SideNavComponent,
      SmoothTransitionComponent,
      AccurateCalculationComponent ,
      AssetVerificationComponent,
      PhysicalAssetComponent,
      LearnMoreComponent,
      SuccessStoryComponent,
      IntegrationsComponent ,
      ManagedServicesComponent,
      HomeComponent,
      BlogsComponent,
      ScheduleDemoComponent,
      TechnologyProcessComponent
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
