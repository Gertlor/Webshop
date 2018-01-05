
import { ProductcreateComponent } from './product/productcreate/productcreate.component';
import { ProductoverviewComponent } from './product/productoverview/productoverview.component';

import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./shared/header/header.component";
import {ProductComponent} from "./product/product.component";
import {AccountComponent} from "./account/account.component";
import {LoginComponent} from "./auth/login/login.component";
import {AccountCreateComponent} from "./account/account-create/account-create.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {TokenService} from "./auth/token/token.service";
import {AccountService} from "./account/account.service";
import {ProductService} from "./product/product.service";
import {TokenInterceptor} from "./auth/token/token.interceptor";
import {MessageService} from "./shared/message/message.service";
import {MessageComponent} from "./shared/message/message.component";

@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    AccountComponent,
    LoginComponent,
    AccountCreateComponent,
    ProductcreateComponent,
    ProductoverviewComponent,
    MessageComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    HttpClientModule,
    MatSnackBarModule,
    MatAutocompleteModule
  ],
  providers: [AuthService, TokenService, AccountService, ProductService, MessageService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent, MessageComponent]
})
export class AppModule { }
