import { Component, OnInit } from '@angular/core';
import { appstateService } from '../shared/appstate.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  message: string;

  constructor(private appstate: appstateService) {}

  ngOnInit() {}
}
