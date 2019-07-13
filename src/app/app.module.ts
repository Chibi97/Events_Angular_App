import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  VoterService,
  DurationPipe,
  LocationValidator,
  EventResolver,
} from './events/index';

import {
  CollapsibleBlockComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';

import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { NotificationService } from './services/notification.service';
@NgModule({
  imports: [
  /* importing other modules (which makes all of its exported declarations
     and providers available to this module) */
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
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
    CollapsibleBlockComponent,
    SimpleModalComponent,
    UpvoteComponent,
    DurationPipe,
    ModalTriggerDirective,
    LocationValidator
  ],
  providers: [
    // services are declared here
    EventService,
    NotificationService,
    EventResolver,
    // EventRouteActivator, // OUR CUSTOM ROUTE GUARD
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
      /* we can define services like this also
        for EventService it'd be like this: { provide: EventService, useValue: EventService }
        when that string is requested, checkDirtyState fn will be provided
      */
    },
    EventListResolver,
    AuthService,
    VoterService,
    /**
     * It's actually important to specify types when we inject some service.
     * When we type constructor(private service: SomeService), angular will
     * look at the type, check if that service is in providers here, and
     * make an instace for us.
     *
     * We can use longterm syntax like in Startup of dotnet project:
     * { provide: Logger, useClass: FileLogger } where FileLogger is a concrete
     * implementation of Logging interface (or generic here).
     *
     * We can also use "AddSingleton" from dotnet:
     * { provide: MinimalLogger, useExisting: Logger }
     * everytime MinLogger is requested, the same instance will be provided.
     *
     * Factory pattern can be used too:
     * {provider: Logger, useFactory: someFactoryFunction() }
     */
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
