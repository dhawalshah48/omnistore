import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { SellComponent } from './sell/sell.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { MerchantLoginComponent } from './login/merchant-login/merchant-login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavUserComponent } from './nav-user/nav-user.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    FooterComponent,
    ShowCategoryComponent,
    SellComponent,
    CartComponent,
    ProfileComponent,
    UserLoginComponent,
    MerchantLoginComponent,
    NavBarComponent,
    NavUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [FooterComponent,HeaderComponent,AppComponent]
})
export class AppModule { }
