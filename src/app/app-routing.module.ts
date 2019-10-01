import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { MerchantLoginComponent } from './login/merchant-login/merchant-login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { SellComponent } from './sell/sell.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'merchant-login', component: MerchantLoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'category', component: ShowCategoryComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'cart ', component: CartComponent},
  {path: 'sell', component: SellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
