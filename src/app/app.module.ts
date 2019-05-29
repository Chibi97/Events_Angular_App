import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
    // importing other modules
    // (which includes all of its exported declarations
    // and providers available to this module)
  ],
  declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventsThumbnailComponent,
        NavbarComponent
        // component pipe or directive must be declared here
  ],
  providers: [
    // services are declared here
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
