import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewsComponent } from './news.component';
import { MusicComponent } from './music.component';
import { AboutComponent } from './about.component';
import { LiveComponent } from './live.component';
import { ContactComponent } from './contact.component';
import { StoreComponent } from './store.component';
import { ShowService } from './show.service';
import { EpkComponent } from './epk.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    NewsComponent,
    MusicComponent,
    AboutComponent,
    LiveComponent,
    ContactComponent,
    StoreComponent,
    EpkComponent
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule {}
