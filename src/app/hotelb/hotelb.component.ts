import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotelb',
  templateUrl: './hotelb.component.html',
  styleUrls: ['./hotelb.component.css']
})
export class HotelbComponent implements OnInit {
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
