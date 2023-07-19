import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    //Cuando creamos un nuevo componente se tiene que declarar aca
    AppComponent,



  ],//Aca van los modulos
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
