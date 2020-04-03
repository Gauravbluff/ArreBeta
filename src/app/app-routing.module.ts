import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { PickanddropComponent } from './pickanddrop/pickanddrop.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { GiftsComponent } from './gifts/gifts.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ContactComponent } from './contact/contact.component';
import { FoodfromresturantComponent } from './foodfromresturant/foodfromresturant.component';
import { ArrebetaforbusinessComponent } from './arrebetaforbusiness/arrebetaforbusiness.component';


const routes: Routes = [
  {
  path:'',
  component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'groceries',
    component:GroceriesComponent
  },
  {
    path:'pickanddrop',
    component:PickanddropComponent
  },
  {
    path:'nonveg',
    component:NonvegComponent
  },
  {
    path:'gifts',
    component:GiftsComponent
  },
  {
    path:'medicine',
    component:MedicineComponent
  },
  {
    path:'foodfromresturant',
    component:FoodfromresturantComponent
  },
  {
    path:'business',
    component:ArrebetaforbusinessComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
