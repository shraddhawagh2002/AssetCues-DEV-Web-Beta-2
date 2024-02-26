import { Routes } from '@angular/router';
import { TabLayoutOnPageComponent } from '../components/tab-layout-on-page/tab-layout-on-page.component';
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



export const routes: Routes = [
    // {path: '', pathMatch : 'full', redirectTo: '/home'},
    // {path: 'home', loadChildren: () => import('../components/home/home.module').then(m =>m.HomeModule)},
    // {path: 'blogArticle', loadChildren: () => import('../components/Blog/BlogArticle/BlogArticle.module').then(m =>m.BlogArticleModule)},
    // {path: 'blogLangingPage', loadChildren: () => import('../components/Blog/BlogLandingPage/BlogLandingPage.module').then(m =>m.BlogLandingPageModule)},
    // {path: 'product', loadChildren: () => import('../components/product/product.module').then(m =>m.ProductModule)},
    // {path: 'biotech', loadChildren: () => import('../components/Biotech/biotech.module').then(m =>m.biotechModule)},
    
        // {path: '', redirectTo:'/', pathMatch: 'full' },
        {path: '', title:'tab layout', component: TabLayoutOnPageComponent },
        {path: 'a', title:'simple asset', component:  SimpleAssetComponent},
        {path: 'sidenev', title:'side nev', component:  SideNavComponent},
        {path: 'smoothtrans', title:'smooth trans', component:  SmoothTransitionComponent},
        {path: 'cal', title:'calculation ', component:  AccurateCalculationComponent},
        {path: 'verification', title:'verification ', component:  AssetVerificationComponent},
        {path: 'physicalasset', title:'physical asset ', component:  PhysicalAssetComponent},
        {path: 'learnmore', title:'learnmore ', component:  LearnMoreComponent},
        {path: 'success', title:'success story ', component: SuccessStoryComponent},
        {path: 'i', title:'integration ', component: IntegrationsComponent},
        {path: 'ms', title:'managed service ', component: ManagedServicesComponent}


        
        // {
        //     path:'',children:[
        //         {path:'components/a',component:SimpleAssetComponent}
        //     ]
        // }

];
