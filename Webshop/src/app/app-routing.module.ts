
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

const routes: Routes = [
  { path: '', component:AppComponent},
  { path: 'login', component: LoginComponent},
  { path: 'account', component: AccountComponent},
  { path: 'product', component: ProductComponent},
  { path: 'account/new', component: AccountCreateComponent, canActivate: [AuthGuardService]},
  { path: 'product/new', component: ProductcreateComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuardService, AuthService]
})
export class AppRoutingModule {}
