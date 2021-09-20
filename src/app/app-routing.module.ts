import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddoreditproductComponent } from './features/components/addoreditproduct/addoreditproduct.component';
import { LoginComponent } from './core/components/login/login.component';
import { CanActivateGaurdService } from './core/gaurds/can-activate-gaurd.service';
import { CanDeactivateGaurdService } from './core/gaurds/can-deactivate-gaurd.service';
import { ProductsComponent } from './features/components/products/products.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [CanActivateGaurdService],
  },
  {
    path: 'add-product',
    component: AddoreditproductComponent,
    canActivate: [CanActivateGaurdService],
    canDeactivate: [CanDeactivateGaurdService],
  },
  {
    path: 'edit-product',
    component: AddoreditproductComponent,
    canActivate: [CanActivateGaurdService],
    canDeactivate: [CanDeactivateGaurdService],
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    canActivate: [CanActivateGaurdService],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
