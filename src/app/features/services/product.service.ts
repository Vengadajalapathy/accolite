import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getMobiles(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/getMobiles');
  }

  deleteProduct(id: number) {
    return this.httpClient.delete('http://localhost:3000/deleteMobile/' + id);
  }
}
