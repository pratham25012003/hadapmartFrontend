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
  constructor( 
    private getCartService:CartService,
    private router:Router,
    private removeItemService: CartService,
   ) { }


   
  ngOnInit(): void {
    this.cartItems = this.getCartService.getCartItems();
    console.log("we got cartItems from cartService: ",this.cartItems)
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
