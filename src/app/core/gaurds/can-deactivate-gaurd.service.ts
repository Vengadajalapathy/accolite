import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddoreditproductComponent } from 'src/app/features/components/addoreditproduct/addoreditproduct.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGaurdService
  implements CanDeactivate<AddoreditproductComponent>
{
  constructor() {}
  canDeactivate(component: AddoreditproductComponent): boolean {
    if (component.addProductForm.dirty) {
      return confirm('Are you sure you want to leave this page');
    }
    return true;
  }
}
