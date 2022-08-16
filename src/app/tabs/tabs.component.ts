import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor() {}

  @ViewChild('tabgroup') tabgroup;

  ngOnInit() {}

  getValues(val) {
    console.warn(val);
  }

  placeList = [
    { code: 'Kuchnia', name: 'item1' },
    { code: 'Łazienka', name: 'item2' },
    { code: 'Salon', name: 'item3' },
    { code: 'Sypialnia', name: 'item4' },
  ];

  changeIndex(tabgroup: MatTabGroup, number: number) {
    tabgroup.selectedIndex = number;
  }
}
