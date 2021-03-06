import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HotelaComponent } from './hotela/hotela.component';
import { HotelbComponent } from './hotelb/hotelb.component';
import { HotelcComponent } from './hotelc/hotelc.component';
import { HoteldComponent } from './hoteld/hoteld.component';
import { appstateService } from './shared/appstate.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BookingComponent,
    HomeComponent,
    NoPageFoundComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    HotelaComponent,
    HotelbComponent,
    HotelcComponent,
    HoteldComponent
  ],
  bootstrap: [AppComponent],
  providers: [appstateService]
})
export class AppModule {}
