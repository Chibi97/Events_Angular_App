import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent},
    {
        path: 'events/:id', canActivate: [EventRouteActivator], component: EventDetailsComponent,
    },
    { path: 'notfound', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
];

// pathMatch can be either "full" or "prefix"
// "prefix" -> redirect if URL starts with the specified path string
// "full"   -> redirect if it fully matched specified string
