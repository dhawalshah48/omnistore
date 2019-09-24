import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { SellComponent } from './sell/sell.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    FooterComponent,
    ShowCategoryComponent,
    SellComponent,
    CartComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
<<<<<<< HEAD
        { path: '', component: MenuComponentComponent, pathMatch: 'full' },
       { path: 'header', component: HeaderComponent }
=======
        { path: '', component: MainComponent },
        { path: 'home', component: MainComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'showCategory', component: ShowCategoryComponent },
        { path: 'sell', component: SellComponent },
        { path: 'cart', component: CartComponent },
        { path: 'profile', component: ProfileComponent },
>>>>>>> 1b8840151825bbe8d2750b1cfe1480712e1a25f6

      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, NavBarComponent,FooterComponent]
})
export class AppModule { }
