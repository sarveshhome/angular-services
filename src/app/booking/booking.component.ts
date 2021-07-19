import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appstateService } from '../shared/appstate.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public parameterValue: string;
  message: string;
  id: number;
  private sub: any;
  constructor(
    private appstate: appstateService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.parameterValue = this.route.snapshot.params.id;
    //this.message = this.parameterValue;
    console.log(this.route.snapshot.paramMap.get('id'));
    const returnvaluefromservice = this.appstate.messages(this.parameterValue);
    this.message = returnvaluefromservice[0][this.parameterValue];
  }

  goBack(): void {
    this.location.back();
  }
}
