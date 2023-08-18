import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  ngOnInit() {}

  public isUpper : boolean = false
  public orderBy? : keyof Hero
  public heroes : Hero[] = [
    {
      name:'Superman',
      canFly: true,
      color: Color.Blue
    },
    {
      name:'SpiderMan',
      canFly: false,
      color: Color.Red
    },
    {
      name:'Black Phanter',
      canFly: false,
      color: Color.Black
    },
    {
      name:'Moon Knight',
      canFly: false,
      color: Color.White
    },
    {
      name:'Black Adam',
      canFly: true,
      color: Color.Black
    },
    {
      name:'Thor',
      canFly: false,
      color: Color.Blue
    },

  ]

  toogleUpperCase():void{
    this.isUpper = !this.isUpper;
  }

  toogleSortBy(sort : keyof Hero):void{
    this.orderBy = sort;
  }
}
