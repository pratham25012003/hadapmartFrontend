import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   cartItems:any[] = [];
   shippingAddress: string = '';
  //  totalPrice:any; 

  constructor( 
    private getCartService:CartService,
    private router:Router,
    private removeItemService: CartService,
   ) { }

  //  console.log("totalPrice: ",this.cartItems[0]?.price)
  //  this.cartItems.forEach(item => {
  //    // console.log("Price of item:", item.price);
  //    this.totalPrice = this.totalPrice + item.price
  //  });

  //  calculateTotalPrice(): number {
  //   // this.cartItems.forEach(item => {
  //   //    console.log("Price of item:", item.price);
  //   //    this.totalPrice = this.totalPrice + item.price
  //   //    });


  //   return this.cartItems.reduce((total, item) => total + item.price , 0);

  //   // return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // }

  calculateTotalPrice() {
    const totalPrice = this.cartItems.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      return total + price;
    }, 0);
  
    console.log("Total Price:", totalPrice);
    return totalPrice;
  }
  

  checkout(): void {
    if (this.shippingAddress) {
      console.log('Checkout Details:', {
        cartItems: this.cartItems,
        totalPrice: this.calculateTotalPrice(),
        shippingAddress: this.shippingAddress,
      });
      alert('Order placed successfully!');
      // Reset cart and address (optional)
      this.cartItems = [];
      this.shippingAddress = '';
    } else {
      alert('Please enter a shipping address.');
    }
  }
  
   
  ngOnInit(): void {
    this.cartItems = this.getCartService.getCartItems();
    console.log("we got cartItems from cartService: ",this.cartItems)
    console.log("*****************CART PRICE***************: ",this.cartItems[0]?.price)
  }
  

  removeItem(item_id:any){
    this.removeItemService.removeItem(item_id)
   //  this.getAllItems()
   this.cartItems =this.getCartService.getCartItems();
 }
 decreaseQuantity(item:any){

 }
 increaseQuantity(item:any){

 }

 navigate(value:any){
   if(value == "continueShopping"){
     this.router.navigate(['/product'])
   }
 }

}
