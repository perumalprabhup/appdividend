import { BusinessService } from './../business.service';
import { Component, OnInit } from '@angular/core';
import Business from '../Business';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  businessess: Business[];
  constructor(private bs: BusinessService) { }

  ngOnInit() {
    this.bs.getBusinesses().subscribe((data: Business[]) => {
      this.businessess = data;
    });
  }
  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
