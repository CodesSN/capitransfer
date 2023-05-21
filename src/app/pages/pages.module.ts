import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ComponentsModule } from '../shared/components/components.module';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { TransferComponent } from './transfer/transfer.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LandingPageComponent,
    TransferComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
