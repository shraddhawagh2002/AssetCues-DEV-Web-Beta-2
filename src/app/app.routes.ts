import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', pathMatch : 'full', redirectTo: '/home'},
    {path: 'home', loadChildren: () => import('../components/home/home.module').then(m =>m.HomeModule)},
    {path: 'blogArticle', loadChildren: () => import('../components/Blog/BlogArticle/BlogArticle.module').then(m =>m.BlogArticleModule)},
    {path: 'blogLangingPage', loadChildren: () => import('../components/Blog/BlogLandingPage/BlogLandingPage.module').then(m =>m.BlogLandingPageModule)},
    {path: 'product', loadChildren: () => import('../components/product/product.module').then(m =>m.ProductModule)},
    {path: 'biotech', loadChildren: () => import('../components/Biotech/biotech.module').then(m =>m.biotechModule)},

];
