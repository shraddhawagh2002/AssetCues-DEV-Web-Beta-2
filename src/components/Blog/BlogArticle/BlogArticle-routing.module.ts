
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogarticleComponent } from './blogarticle/blogarticle.component';
//import { HomeComponent } from './home/home.component';
export const BlogArticleRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: BlogarticleComponent,
                data: { title: 'Blog Article Component' },
            },

        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(BlogArticleRoutes)],
    exports: [RouterModule],
})
export class BlogArticleRoutingModule {}
