import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishService } from './services/dish/dish.service';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { DishState } from './models/dish/dish.redux';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GridviewComponent } from './components/gridview/gridview.component';
import { GridcardComponent } from './components/gridcard/gridcard.component';
import { BannerComponent } from './components/banner/banner.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GridviewComponent,
    GridcardComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([DishState], {
      developmentMode: true
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
