
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglandingpageComponent } from './bloglandingpage/bloglandingpage.component';
export const BlogLandingPageRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: BloglandingpageComponent,
                data: { title: 'Blog landingpage Component' },
            },

        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(BlogLandingPageRoutes)],
    exports: [RouterModule],
})
export class BlogLandingPageRoutingModule {}
