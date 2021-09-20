import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  getLookupData() {
    const response1 = this.httpClient.get('http://localhost:3000/lookup/ram');
    const response2 = this.httpClient.get(
      'http://localhost:3000/lookup/memory'
    );
    const response3 = this.httpClient.get(
      'http://localhost:3000/lookup/camera'
    );
    return forkJoin([response1, response2, response3]);
  }
}
