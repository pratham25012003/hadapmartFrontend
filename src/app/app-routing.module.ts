import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './coponents/cart/cart.component';
import { AboutComponent } from './coponents/about/about.component';
import { ContactPageComponent } from './coponents/contact-page/contact-page.component';

const routes: Routes = [
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'',
    component:ProductComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact-us',
    component:ContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
