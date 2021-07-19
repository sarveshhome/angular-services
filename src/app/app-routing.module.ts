import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HotelaComponent } from './hotela/hotela.component';
import { HotelbComponent } from './hotelb/hotelb.component';
import { HotelcComponent } from './hotelc/hotelc.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hotela', component: HotelaComponent },
  { path: 'hotelb', component: HotelbComponent },
  { path: 'hotelc', component: HotelcComponent },
  { path: 'booknow/:id', component: BookingComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
