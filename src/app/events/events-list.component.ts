import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { NotificationService } from '../services/notification.service';

@Component({
  // selector: 'app-events-list', we dont't need it, we are using routing
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService, private notification: NotificationService) {
    this.events = this.eventService.getEvets();
  }

  ngOnInit() {
    // Called after the constructor, when the component loads
    // like window.onload(fn)
    this.events = this.eventService.getEvets();
  }

  handleClick(eventName) {
    this.notification.success(eventName);
  }

  // handleEventClick(data) {
  //     console.log('recieved:', data);
  // }
}
