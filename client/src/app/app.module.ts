import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRouters } from './routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegistrationComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
