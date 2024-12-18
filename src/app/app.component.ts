import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  // title = 'mypractice';

  products:any[]=[];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
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

}
