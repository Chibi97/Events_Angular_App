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
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';

@NgModule({
  imports: [
  /* importing other modules (which makes all of its exported declarations
     and providers available to this module) */
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    // component, pipe or directive must be declared here
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    // services are declared here
    EventService,
    NotificationService,
    EventRouteActivator, // OUR CUSTOM ROUTE GUARD
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
      /* we can define services like this also
        for EventService it'd be like this: { provide: EventService, useValue: EventService }
        when that string is requested, checkDirtyState fn will be provided
      */
    },
    EventListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  // prevent users from leaving the page /event/new only if they haven't saved the event
  // all buttons and links are disabled with this guard
  if (component.isDirty) {
    // we have access to isDirty bcz our first param is the component we specified
    // isDirty = true when we are in /events/new
    return window.confirm('You have not saved this event. Do you really want to cancel?');
  }
  return true;
}
