import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './non-nav-comps/c1/c1.component';
import { C2Component } from './non-nav-comps/c2/c2.component';
import { C3Component } from './non-nav-comps/c3/c3.component';
import { StarListComponent } from './nav-comps/star-list/star-list.component';
import { PersonsListComponent } from './nav-comps/persons-list/persons-list.component';
import { DbWrapperComponent } from './nav-comps/db-wrapper/db-wrapper.component';
import { OtherWrapperComponent } from './nav-comps/other-wrapper/other-wrapper.component';
import { OtherC1Component } from './nav-comps/other-c1/other-c1.component';
import { OtherC2Component } from './nav-comps/other-c2/other-c2.component';
import { OtherC3Component } from './nav-comps/other-c3/other-c3.component';
import { AComponent } from './fix-img-comps/a/a.component';
import { BComponent } from './fix-img-comps/b/b.component';
import { CComponent } from './fix-img-comps/c/c.component';
import { HomeComponent } from './fix-img-comps/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    StarListComponent,
    PersonsListComponent,
    DbWrapperComponent,
    OtherWrapperComponent,
    OtherC1Component,
    OtherC2Component,
    OtherC3Component,
    AComponent,
    BComponent,
    CComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
