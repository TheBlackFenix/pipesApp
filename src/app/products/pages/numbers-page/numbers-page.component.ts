import { Component } from '@angular/core';

@Component({
  selector: 'products-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css']
})
export class NumbersPageComponent {
  public totalSells : number = 123456789.9987
  public percent : number = 0.457
}
