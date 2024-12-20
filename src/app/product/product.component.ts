import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
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
    private addToCartService:CartService
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

  addToCart(product:any){
    this.addToCartService.addToCart(product)
  }

}
