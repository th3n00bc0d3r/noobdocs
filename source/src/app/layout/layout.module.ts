import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FrameComponent } from './frame/frame.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [HeaderComponent, FrameComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
