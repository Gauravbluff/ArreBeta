import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PickanddropComponent } from './pickanddrop/pickanddrop.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { FoodfromresturantComponent } from './foodfromresturant/foodfromresturant.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { MedicineComponent } from './medicine/medicine.component';
import { GiftsComponent } from './gifts/gifts.component';
import { ArrebetaforbusinessComponent } from './arrebetaforbusiness/arrebetaforbusiness.component';
import { LocationComponent } from './location/location.component';
import { LaundryComponent } from './laundry/laundry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PickanddropComponent,
    GroceriesComponent,
    FoodfromresturantComponent,
    NonvegComponent,
    MedicineComponent,
    GiftsComponent,
    ArrebetaforbusinessComponent,
    LocationComponent,
    LaundryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
