import { OrderDetailsService } from './../../services/order-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private services:OrderDetailsService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.services.foodDetails;
  }

}