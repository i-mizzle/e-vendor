import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { Headers, Http, HttpModule, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ClientAreaComponent } from './client-area/client-area.component';
import { VendorAreaComponent } from './vendor-area/vendor-area.component';
import { VendorMenuComponent } from './vendor-area/vendor-menu/vendor-menu.component';
import { ClientMenuComponent } from './client-area/client-menu/client-menu.component';
import { CallToActionComponent } from './landing/call-to-action/call-to-action.component';
import { FeaturedVendorsComponent } from './landing/featured-vendors/featured-vendors.component';
import { TestimonialsComponent } from './landing/testimonials/testimonials.component';
import { SupportComponent } from './support/support.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { VendorComponent } from './vendor/vendor.component';

const appRoutes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'booking', component: BookingFormComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'support', component: SupportComponent },
  { path: 'search/:term', component: SearchResultsComponent },
  { path: 'inspiration', component: InspirationComponent },
  { path: 'vendor/:id', component: VendorComponent },
  { path: 'vendor-area', component: VendorAreaComponent },
  { path: 'user', component: ClientAreaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    BookingFormComponent,
    SignupComponent,
    SigninComponent,
    ClientAreaComponent,
    VendorAreaComponent,
    VendorMenuComponent,
    ClientMenuComponent,
    CallToActionComponent,
    FeaturedVendorsComponent,
    TestimonialsComponent,
    SupportComponent,
    InspirationComponent,
    SearchResultsComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
