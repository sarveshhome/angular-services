import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appstateService } from '../shared/appstate.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  message: string;
  id: number;
  private sub: any;
  constructor(
    private appstate: appstateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      console.log(params.id);
      this.message = this.id.toString();
      // In a real app: dispatch action to load the details here.
    });

    console.log(
      'this.route.snapshot.paramMap.get(',
      typeof this.route.snapshot.paramMap.get('id')
    );
    this.id = +this.route.snapshot.paramMap.get('id');
  }
}
