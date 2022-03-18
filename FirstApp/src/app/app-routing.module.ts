import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/home/services/details/details.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  
      {path:"",component:HomeComponent},
      {path:"about",component:AboutComponent},
      {path:"contact",component:ContactComponent},
      {path:"home/:id",component:DetailsComponent},
      {path:"awards",component:AwardsComponent},
      {path:"product",component:ProductComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
