import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsdisplayComponent } from './newsdisplay/newsdisplay.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './header/header.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { SectionsComponent } from './left-side-bar/sections/sections.component';
import { SectionComponent } from './left-side-bar/sections/section/section.component';
import { DisplayAdsComponent } from './right-side-bar/display-ads/display-ads.component';
import { AdComponent } from './right-side-bar/display-ads/ad/ad.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsdisplayComponent,
    HeaderComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    SectionsComponent,
    SectionComponent,
    DisplayAdsComponent,
    AdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
