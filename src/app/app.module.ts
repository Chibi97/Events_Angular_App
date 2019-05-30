import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/notification.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    /* importing other modules (which makes all of its exported declarations
       and providers available to this module) */
  ],
  declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventsThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent
        // component, pipe or directive must be declared here
  ],
  providers: [
    EventService,
    NotificationService
    // services are declared here
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
