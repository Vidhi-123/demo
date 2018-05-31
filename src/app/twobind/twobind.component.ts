import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twobind',
  templateUrl: './twobind.component.html',
  styleUrls: ['./twobind.component.css']
})
export class TwobindComponent implements OnInit {

  constructor() { }
  str:string="vidhi shah";
  no1:number;
  no2:number;
  ans:number;
  flag:boolean=true;
  onAdd()
  {
    this.ans=this.no1+this.no2;
  }
  onClick()
  {
    if(this.flag)
    {
      this.flag=false;
    }
    else{
      this.flag=true;
    }
  }

  ngOnInit() {
  }

}
