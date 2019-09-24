import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: MenuComponentComponent, pathMatch: 'full' },
       { path: 'header', component: HeaderComponent }

      ]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
