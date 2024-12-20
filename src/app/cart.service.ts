import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  constructor() { }

  addToCart(item:any):void{
    this.cart.push(item)
    console.log("this.cart in cart service: ",this.cart)
  }

  getCartItems(): any[] {
    return this.cart
  }
  
  removeItem(itemId: string): void {
    this.cart = this.cart.filter(item => item._id !== itemId);
    console.log("Cart after item removal: ", this.cart);
  }
}
