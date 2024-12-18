import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "https://hadapmart.onrender.com/api/v1/getAllProduct"

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get(this.apiUrl)
  }
}
