
import {AuthGuardService} from "./auth/guard/auth-guard.service";
import {AuthService} from "./auth/auth.service";
import {LoginComponent} from "./auth/login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./product/product.component";
import {NgModule} from "@angular/core";
import {ProductcreateComponent} from "./product/productcreate/productcreate.component";
import {HomeComponent} from "./home/home.component";
import {CartOverviewComponent} from "./cart/cart-overview/cart-overview.component";
import {AccountRegisterComponent} from "./account/account-register/account-register.component";
import {AccountOverviewComponent} from "./account/account-overview/account-overview.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full"},
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductComponent},
  { path: 'account/register', component: AccountRegisterComponent},
  { path: 'products/new', component: ProductcreateComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartOverviewComponent},
  {path: 'account', component: AccountOverviewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuardService, AuthService]
})
export class AppRoutingModule {}
