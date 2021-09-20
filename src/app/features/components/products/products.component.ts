import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonutilService } from '../../../shared/services/commonutil.service';
import { ProductData, Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private commonUtilService: CommonutilService,
    private router: Router
  ) {}

  productsData!: ProductData;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.productService.getMobiles().subscribe(
      (res) => {
        this.productsData = res;
      },
      (err) => {
        console.log(err.error.message);
      }
    );
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      (res) => {
        alert('Deleted Successfully');
        this.fetchData();
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
  mapRam(id: number) {
    return this.commonUtilService.mapRam(id);
  }
  mapMemory(id: number) {
    return this.commonUtilService.mapRam(id);
  }
  mapCamera(id: number) {
    return this.commonUtilService.mapRam(id);
  }

  editProduct(product: Product) {
    this.commonUtilService.updatingEditProduct(product);
    this.router.navigateByUrl('/edit-product');
  }
}
