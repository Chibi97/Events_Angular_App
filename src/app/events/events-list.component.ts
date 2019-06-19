import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { NotificationService } from '../services/notification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // selector: 'app-events-list', we dont't need it, we are using routing
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private route: ActivatedRoute, private eventService: EventService, private notification: NotificationService) {
  }

  ngOnInit() {
    // Called after the constructor, when the component loads
    // like window.onload(fn)

    this.events = this.route.snapshot.data.events;
    /*When the route was resolved and EventListResolver was called, it sent us data
      that we accepted in "events" property. Now that prop is available within snapshot.data
      bcz everything that comes from routes is associated with snapshot.
      We are doing this to properly simulate real-life scenario -- waiting for ajax.
      Bcz our service injects getEvents() result to route, our whole component is not loaded 
      until data arrives.
    */
    /* this.eventService.getEvets().subscribe(events => {
        this.events = events;
      });
      receive data only when it comes by "ajax" call (simulated)
      Problem: our component is loaded (<h1>Upcoming Angular Events</h1>)
      but our data is not (waiting to arrive 2secs).
    */
  }

  handleClick(eventName) {
    console.log('success - toastr');
    // this.notification.success(eventName);
  }

  // handleEventClick(data) {
  //     console.log('recieved:', data);
  // }
}
