import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { KeepHtmlPipe } from '../keepHtmlPipe';
import { ArticleComponent } from './article/article.component';
import { CategoriesComponent } from './categories/categories.component';
import { WipComponent } from './wip/wip.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    KeepHtmlPipe,
    ArticleComponent,
    CategoriesComponent,
    WipComponent,
    HomeComponent
  ],
  imports: [
  CommonModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ]
})
export class PagesModule { }
