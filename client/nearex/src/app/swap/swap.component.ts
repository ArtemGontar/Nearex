import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.sass']
})
export class SwapComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

export class Food {
  public value: string | undefined;
  public viewValue: string | undefined;
}