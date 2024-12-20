import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  constructor() { }

  // addToCart(item:any):void{
  //   this.cart.push(item)
  //   console.log("this.cart in cart service: ",this.cart)
  // }

  addToCart(item: any): void {
    const existingIndex = this.cart.findIndex(cartItem => cartItem._id === item._id);

    if (existingIndex !== -1) {
      // Item already in cart, remove it
      this.cart.splice(existingIndex, 1);
      console.log('Item removed from cart:', item);
    } else {
      // Item not in cart, add it
      this.cart.push(item);
      console.log('Item added to cart:', item);
    }

    console.log('Updated cart:', this.cart);
  }

  getCartItems(): any[] {
    return this.cart
  }
  
  removeItem(itemId: string): void {
    this.cart = this.cart.filter(item => item._id !== itemId);
    console.log("Cart after item removal: ", this.cart);
  }
}
