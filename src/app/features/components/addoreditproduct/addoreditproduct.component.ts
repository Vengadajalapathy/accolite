import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonutilService } from '../../../shared/services/commonutil.service';
import { Lookup } from '../../models/lookup.model';
import { AddOrEditService } from '../../services/add-or-edit.service';

@Component({
  selector: 'app-addoreditproduct',
  templateUrl: './addoreditproduct.component.html',
  styleUrls: ['./addoreditproduct.component.css'],
})
export class AddoreditproductComponent implements OnInit {
  @ViewChild('addProductForm')
  public addProductForm!: NgForm;

  constructor(
    private addOrEditService: AddOrEditService,
    private commonUtilService: CommonutilService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  componentName: any;
  displayName: any;

  ram!: Lookup[];
  memory!: Lookup[];
  camera!: Lookup[];

  editProduct: any;

  submitButtonClicked = false;

  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    ram: ['', Validators.required],
    memory: ['', Validators.required],
    camera: ['', Validators.required],
    price: ['', Validators.required],
  });

  ngOnInit(): void {
    this.componentName = this.activatedRoute.snapshot.url[0].path;
    this.displayComponentName();

    this.ram = this.commonUtilService.getLookupRam();
    this.memory = this.commonUtilService.getLookupMemory();
    this.camera = this.commonUtilService.getLookupCamera();

    if (this.componentName === 'edit-product') {
      this.commonUtilService.getEditProduct().subscribe((product) => {
        this.editProduct = product;
        if (this.editProduct) {
          this.productForm.patchValue({
            name: this.editProduct.name,
            price: this.editProduct.price,
            camera: this.commonUtilService.mapCamera(this.editProduct.camera),
            memory: this.commonUtilService.mapMemory(this.editProduct.memory),
            ram: this.commonUtilService.mapRam(this.editProduct.ram),
          });
        }
      });
    }
    console.log(this.productForm);
  }

  addOrEditProduct() {
    this.submitButtonClicked = true;
    console.log(this.productForm);
    if (this.productForm.valid) {
      let product = { data: this.productForm.value };
      product.data.ram = this.commonUtilService.mapLabelForRam(
        product.data.ram
      );
      product.data.memory = this.commonUtilService.mapLabelForMemory(
        product.data.memory
      );
      product.data.camera = this.commonUtilService.mapLabelForCamera(
        product.data.camera
      );
      console.log(product);
      if (this.componentName === 'add-product') {
        this.addOrEditService.addProduct(product).subscribe(
          (res) => {
            alert('Product added successfully');
            this.productForm.reset();
            this.router.navigateByUrl('/products');
          },
          (err) => {
            alert(err.message);
          }
        );
      } else {
        product.data.id = this.editProduct.id;
        this.addOrEditService.editProduct(product).subscribe(
          (res) => {
            alert('Product editted successfully');
            this.addProductForm.resetForm();
            this.router.navigateByUrl('/products');
          },
          (err) => {
            alert(err.message);
            console.log(err);
          }
        );
      }
    }
  }

  onCancel() {
    this.router.navigateByUrl('/products');
  }

  displayComponentName() {
    if (this.componentName === 'add-product') {
      this.displayName = 'Add Product';
    } else {
      this.displayName = 'Edit Product';
    }
  }
}
