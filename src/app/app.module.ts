import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      //{ path: 'products', component: ProductListComponent },
      //{ path: 'products/:id', component: ProductsDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
