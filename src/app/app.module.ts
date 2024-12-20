import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './coponents/cart/cart.component';
import { FooterComponent } from './coponents/footer/footer.component';
import { AboutComponent } from './coponents/about/about.component';
import { ContactPageComponent } from './coponents/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    FooterComponent,
    AboutComponent,
    ContactPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
