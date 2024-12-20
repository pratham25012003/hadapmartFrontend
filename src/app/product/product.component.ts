import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
// import { Component, OnInit } from '@angular/core';
// import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:any[]=[];

  constructor(
    private productService: ProductService,
    private CartService:CartService,
    private toaster:ToastrService
  ){
    this.productService.getAllProducts().subscribe(
      (response) =>{
        if(response.success){
          this.products = response.data
          console.log("response.data",response.data)
          console.log("this.product",this.products)
        }
      },
      (error)=>{
        console.log("error while fetching Products",error)
      }
    )
  }
     
  ngOnInit(): void {
    
  }
  
  // addToCart(product:any){
  //   this.addToCartService.addToCart(product)
  //   // this.toaster.success("Product Added In Cart")
  // }

   // Toggle item in the cart
   toggleCart(product: any): void {
    this.CartService.addToCart(product); // Already handles add/remove logic
  }

  // Check if item is in the cart
  isInCart(productId: string): boolean {
    const cartItems = this.CartService.getCartItems();
    return cartItems.some(item => item._id === productId);
  }

}
