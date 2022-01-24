import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "src/app/components/products/products.component";
import { UserComponent } from "src/app/components/user/user.component";
import { CreateDashboardComponent } from "src/app/components/create-dashboard/create-dashboard.component";
import { LatestProductComponent } from "src/app/components/latest-product/latest-product.component";
import { CategoriesComponent } from "src/app/components/categories/categories.component";
import { TotalProductsComponent } from "src/app/components/total-products/total-products.component";
const routes: Routes = [
  {
    path: "",
    component: CreateDashboardComponent,
  },
  {
    path: "product",
    component: ProductsComponent,
  },
  {
    path: "total-product",
    component: TotalProductsComponent,
  },
  {
    path: "latest-product",
    component: LatestProductComponent,
  },
  {
    path: "categories",
    component: CategoriesComponent,
  },
  {
    path: "customer",
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
