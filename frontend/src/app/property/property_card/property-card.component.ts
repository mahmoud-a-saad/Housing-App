import {Component} from '@angular/core';

@Component({
  selector: 'app-property-card',
  //template: '<h1> i am a card </h1>',
  templateUrl:'property-card.component.html',
  //styles:['h1{font-weight:Ariel;}']
  styleUrls:['property-card.component.css']
})

export class PropertyCardComponent
{
  property: any={
    "Id":1,
    "Type":"House",
    "Name":"Sky House",
    "Price":12000
  }
}
