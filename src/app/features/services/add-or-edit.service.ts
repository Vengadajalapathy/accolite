import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddOrEditService {
  constructor(private httpClient: HttpClient) {}

  addProduct(product: any) {
    return this.httpClient.post('http://localhost:3000/addMobile', product);
  }

  editProduct(product: any) {
    return this.httpClient.put('http://localhost:3000/editMobile', product);
  }
}
