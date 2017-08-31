import { Component, OnInit } from '@angular/core';
import { listItemData } from './listItemData.modal';
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

    listItemDataArray :listItemData [] =[
      new listItemData('Apple', 100, 'Fujji apple', '../imgs/Fuji_Dry.jpg'),
        new listItemData('Apple2', 200, 'Fujji apple', '../imgs/Fuji_Dry.jpg')
    ];

  constructor() { }

  ngOnInit() {
  }

}
