import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent,
    EventResolver
} from './events/index';

export const appRoutes: Routes = [
    {
        path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
        // it's important that this route is first so angular dones't get confused
        // thinking :id = new
    },
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
    // before resolving this route, call EventsListResolver. It shall return some data that we'll accept with prop events
    {
        path: 'events/:id', component: EventDetailsComponent,
        resolve: {event: EventResolver}
        // canActivate: [EventRouteActivator],
        // guard can either be function or a service
        // (in our case: canActivate is a service, and canDeact is a fn)
    },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'notfound', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: './user/user.module#UserModule' }
    // when /user is hit, load user module!
];

// pathMatch can be either "full" or "prefix"
// "prefix" -> redirect if URL starts with the specified path string
// "full"   -> redirect if it fully matched specified string
