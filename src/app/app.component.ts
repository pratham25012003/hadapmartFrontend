import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports:[RouterOutlet, RouterLink]
})
export class AppComponent  implements OnInit {
  // title = 'mypractice';

  // products:any[]=[];

  // constructor(private productService: ProductService){}

  ngOnInit(): void {
   
  }

}
