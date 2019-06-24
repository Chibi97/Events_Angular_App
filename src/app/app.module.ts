import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent

} from './events/index';

import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { CollapsibleBlockComponent } from './common/collapsible-block.component';

import { NotificationService } from './services/notification.service';
@NgModule({
  imports: [
  /* importing other modules (which makes all of its exported declarations
     and providers available to this module) */
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleBlockComponent
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
    EventListResolver,
    AuthService
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
