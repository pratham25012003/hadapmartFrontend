// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cart: any[] = [];
//   constructor() { }

//   // addToCart(item:any):void{
//   //   this.cart.push(item)
//   //   console.log("this.cart in cart service: ",this.cart)
//   // }

//   // private cartLengthSubject = new BehaviorSubject<number>(0); // Initial length 0
//   // cartLength$ = this.cartLengthSubject.asObservable(); // Observable for subscribers

//   addToCart(item: any): void {
//     const existingIndex = this.cart.findIndex(cartItem => cartItem._id === item._id);

//     if (existingIndex !== -1) {
//       // Item already in cart, remove it
//       this.cart.splice(existingIndex, 1);
//       console.log('Item removed from cart:', item);
//     } else {
//       // Item not in cart, add it
//       this.cart.push(item);
//       console.log('Item added to cart:', item);
//     }

//     console.log('Updated cart:', this.cart);
//     console.log("cart length",this.cart.length)
//   }

//   getCartLength() {
//     console.log("cart length",this.cart.length)
//     return this.cart
   
//   }

//   getCartItems(): any[] {
//     return this.cart
   
//   }
  
//   removeItem(itemId: string): void {
//     this.cart = this.cart.filter(item => item._id !== itemId);
//     console.log("Cart after item removal: ", this.cart);
//   }

//   private updateCartLength(): void {
//     this.cartLengthSubject.next(this.cart.length); // Emit updated cart length
//   }
// }





import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private cartLengthSubject = new BehaviorSubject<number>(0); // Initial length 0
  cartLength$ = this.cartLengthSubject.asObservable(); // Observable for subscribers

  constructor() {}

  // Add or remove item from the cart
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
    this.updateCartLength(); // Update cart length
  }

  // Remove item by ID
  removeItem(itemId: string): void {
    this.cart = this.cart.filter(item => item._id !== itemId);
    console.log('Cart after item removal:', this.cart);
    this.updateCartLength(); // Update cart length
  }

  // Get all items in the cart
  getCartItems(): any[] {
    return this.cart;
  }

  // Get the current cart length
  getCartLength(): number {
    return this.cart.length;
  }

  // Private method to update the cart length and emit it
  private updateCartLength(): void {
    this.cartLengthSubject.next(this.cart.length); // Emit updated cart length
    console.log('Cart length updated:', this.cart.length);
  }
}

