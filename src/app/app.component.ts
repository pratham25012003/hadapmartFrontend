import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports:[RouterOutlet, RouterLink]
})
export class AppComponent  implements OnInit {
  cartLength: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartLength$.subscribe(length => {
      this.cartLength = length; // Update the displayed cart length
    });
  }
}



