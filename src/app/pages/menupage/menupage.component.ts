import { OrderDetailsService } from './../../services/order-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IfStmt, ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private services:OrderDetailsService) { }
getMenuId:any;
menuData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
console.log(this.getMenuId,'getmenu');
if(this.getMenuId)
{
  this.menuData = this.services.foodDetails.filter((value=>{
  return value.id==this.getMenuId;

 }));
 console.log(this.menuData,'menudata>>');
}
  }

}
