import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

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
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      [
        { path: '', component: MainComponent },
        { path: 'home', component: MainComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'showCategory', component: ShowCategoryComponent },
        { path: 'sell', component: SellComponent },
        { path: 'cart', component: CartComponent },
        { path: 'profile', component: ProfileComponent
       },

      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, NavBarComponent, FooterComponent]
})
export class AppModule { }
