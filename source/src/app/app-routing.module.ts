import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameComponent } from './layout/frame/frame.component';
import { ArticleComponent } from './pages/article/article.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { WipComponent } from './pages/wip/wip.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { 
    path: '', 
    component: FrameComponent,
    children: [
      //{ path: '', redirectTo: 'Guides', pathMatch: 'full' },
      { path: '',  component: HomeComponent },
      { path: 'Guides',  component: CategoriesComponent },
      { path: 'Guides/:path',  component: CategoriesComponent },
      { path: 'Guides/:path/:path',  component: CategoriesComponent },
      { path: 'Guides/:path/:path/:path',  component: ArticleComponent },
      { path: '**', component: WipComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
