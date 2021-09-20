import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Lookup } from 'src/app/features/models/lookup.model';
import { Product } from 'src/app/features/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CommonutilService {
  editProduct = new ReplaySubject<Product>();
  lookupRam!: Lookup[];
  lookupMemory!: Lookup[];
  lookupCamera!: Lookup[];

  constructor() {}

  getLookupRam(): Lookup[] {
    return this.lookupRam;
  }

  getLookupMemory(): Lookup[] {
    return this.lookupMemory;
  }

  getLookupCamera(): Lookup[] {
    return this.lookupCamera;
  }

  setLookupRam(ram: any) {
    this.lookupRam = ram;
  }

  setLookupMemory(memory: any) {
    this.lookupMemory = memory;
  }

  setLookupCamera(camera: any) {
    this.lookupCamera = camera;
  }

  setLoggedIn(loggedIn: string) {
    localStorage.setItem('loggedIn', loggedIn);
  }

  getLoggedIn() {
    return Boolean(localStorage.getItem('loggedIn'));
  }

  mapRam(id: number) {
    if (this.lookupRam) {
      for (let i = 0; i < this.lookupRam.length; i++) {
        if (this.lookupRam[i].code === id) {
          return this.lookupRam[i].label;
        }
      }
    }
    return undefined;
  }

  mapMemory(id: number) {
    if (this.lookupMemory) {
      for (let i = 0; i < this.lookupMemory.length; i++) {
        if (this.lookupMemory[i].code === id) {
          return this.lookupMemory[i].label;
        }
      }
    }
    return undefined;
  }
  mapCamera(id: number) {
    if (this.lookupCamera) {
      for (let i = 0; i < this.lookupCamera.length; i++) {
        if (this.lookupCamera[i].code === id) {
          return this.lookupCamera[i].label;
        }
      }
    }
    return undefined;
  }

  mapLabelForRam(label: string) {
    if (this.lookupRam) {
      for (let i = 0; i < this.lookupRam.length; i++) {
        if (this.lookupRam[i].label === label) {
          return this.lookupRam[i].code;
        }
      }
    }
    return undefined;
  }

  mapLabelForMemory(label: string) {
    if (this.lookupMemory) {
      for (let i = 0; i < this.lookupMemory.length; i++) {
        if (this.lookupMemory[i].label === label) {
          return this.lookupMemory[i].code;
        }
      }
    }
    return undefined;
  }

  mapLabelForCamera(label: string) {
    if (this.lookupCamera) {
      for (let i = 0; i < this.lookupCamera.length; i++) {
        if (this.lookupCamera[i].label === label) {
          return this.lookupCamera[i].code;
        }
      }
    }
    return undefined;
  }

  updatingEditProduct(product: Product) {
    this.editProduct.next(product);
  }

  getEditProduct() {
    return this.editProduct;
  }
}
