
import {AuthGuardService} from "./auth/guard/auth-guard.service";
import {AuthService} from "./auth/auth.service";
import {LoginComponent} from "./auth/login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {AccountComponent} from "./account/account.component";
import {ProductComponent} from "./product/product.component";
import {NgModule} from "@angular/core";
import {ProductcreateComponent} from "./product/productcreate/productcreate.component";
import {AccountCreateComponent} from "./account/account-create/account-create.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {CartOverviewComponent} from "./cart/cart-overview/cart-overview.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full"},
  { path: 'login', component: LoginComponent},
  { path: 'account', component: AccountComponent},
  { path: 'products', component: ProductComponent},
  { path: 'account/new', component: AccountCreateComponent, canActivate: [AuthGuardService]},
  { path: 'product/new', component: ProductcreateComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartOverviewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuardService, AuthService]
})
export class AppRoutingModule {}
