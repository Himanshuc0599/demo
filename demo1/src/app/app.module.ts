import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./components/products/products.component";
import { UserComponent } from "./components/user/user.component";
import { CreateDashboardComponent } from "./components/create-dashboard/create-dashboard.component";
import { LatestProductComponent } from "./components/latest-product/latest-product.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { TotalProductsComponent } from "./components/total-products/total-products.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UserComponent,
    CreateDashboardComponent,
    LatestProductComponent,
    CategoriesComponent,
    TotalProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
