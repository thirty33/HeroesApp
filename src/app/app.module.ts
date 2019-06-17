import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DetailComponent } from './components/detail/detail.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryDataService }  from './services/in-memory-data/in-memory-data.services';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NavigatorComponent,
    HeroDetailComponent,
    DetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation : false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
