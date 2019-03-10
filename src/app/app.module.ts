import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnnouncementService } from 'src/app/services/announcement.service';

import { AnnouncementComponent } from 'src/app/components/announcement/announcement.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    AnnouncementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
