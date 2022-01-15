import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'; 
import {MaterialModule} from './modules/material-ui/material-ui.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyinformationComponent } from './companyinformation/companyinformation.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CompanyinformationComponent,
    AllProductsComponent,
    ProductsByCategoryComponent,
    PersonalInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
