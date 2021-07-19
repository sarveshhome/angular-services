import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotelc',
  templateUrl: './hotelc.component.html',
  styleUrls: ['./hotelc.component.css']
})
export class HotelcComponent implements OnInit {
  constructor(private router: Router) {}
  id;
  ngOnInit() {}

  Booknow(event: any) {
    console.log(event);
    this.id = event;
    const url = '/booknow';
    const myurl = `${url}/${this.id}`;
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }
}
