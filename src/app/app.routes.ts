import { Routes } from '@angular/router';
import { DashboardNavbarComponent } from '../components/common/dashboard-navbar/dashboard-navbar.component';
import { CustomerSpaceComponent } from '../components/common/customer-space/customer-space.component';
import { CaseStudiesComponent } from '../components/common/case-studies/case-studies.component';
import { BlogsComponent } from '../components/common/blogs/blogs.component';
import { GlobalEnterprisesComponent } from '../components/home/global-enterprises/global-enterprises.component';
import { HeroSectionComponent } from '../components/home/hero-section/hero-section.component';
import { HomePageVedioComponent } from '../components/home/home-page-vedio/home-page-vedio.component';
import { SideNavComponent } from '../components/home/side-nav/side-nav.component';
import { TechnologyProcessComponent } from '../components/home/technology-process/technology-process.component';
import { AlgoComponent } from '../components/barcode-based/algo/algo.component';
import { ScheduleDemoComponent } from '../components/barcode-based/schedule-demo/schedule-demo.component';
import { AssetInventoryComponent } from '../components/asset-audit/asset-inventory/asset-inventory.component';
import { BarcodeComponent } from '../components/asset-audit/barcode/barcode.component';
import { PerformAuditComponent } from '../components/rfid-based/perform-audit/perform-audit.component';




export const routes: Routes = [
    // {path: '', pathMatch : 'full', redirectTo: '/home'},
    // {path: 'home', loadChildren: () => import('../components/home/home.module').then(m =>m.HomeModule)},
    // {path: 'blogArticle', loadChildren: () => import('../components/Blog/BlogArticle/BlogArticle.module').then(m =>m.BlogArticleModule)},
    // {path: 'blogLangingPage', loadChildren: () => import('../components/Blog/BlogLandingPage/BlogLandingPage.module').then(m =>m.BlogLandingPageModule)},
    // {path: 'product', loadChildren: () => import('../components/product/product.module').then(m =>m.ProductModule)},
    // {path: 'biotech', loadChildren: () => import('../components/Biotech/biotech.module').then(m =>m.biotechModule)},
  
            //   {path: '', redirectTo:'/', pathMatch: 'full' },
         {path: 'navbar', title:'nav bar', component: DashboardNavbarComponent },
         {path: 'customerspace', title:'customer space', component: CustomerSpaceComponent },
         {path: 'casestudies', title:'case studies', component: CaseStudiesComponent },
         {path: 'blogs', title:'blogs', component: BlogsComponent },
         {path: 'globalenterprises', title:'global enterprises', component: GlobalEnterprisesComponent },
         {path: 'herosection', title:'hero section', component: HeroSectionComponent },
         {path: 'homepage', title:'home page', component: HomePageVedioComponent },
         {path: 'sidenav', title:'side nav', component: SideNavComponent },
         {path: 'technologypro', title:'technology pro', component: TechnologyProcessComponent },
         {path: 'algo', title:'algo', component: AlgoComponent },
         {path: 'scheduledemo', title:'schedule demo', component: ScheduleDemoComponent },
         {path: 'assetinventory', title:'asset inventory', component: AssetInventoryComponent },
         {path: 'barcode', title:'barcode', component: BarcodeComponent },
         {path: 'performaudit', title:'perform-audit', component: PerformAuditComponent },
];
