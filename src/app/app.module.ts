import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './coponents/cart/cart.component';
import { FooterComponent } from './coponents/footer/footer.component';
import { AboutComponent } from './coponents/about/about.component';
import { ContactPageComponent } from './coponents/contact-page/contact-page.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // BrowserAnimationsModule,
    CartComponent,
    ProductComponent,
    FooterComponent,
    AboutComponent,
    ContactPageComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 3000,         // Duration in milliseconds
      positionClass: 'toast-top-right', // Position of the toast
      preventDuplicates: true,  // Avoid duplicate messages
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
