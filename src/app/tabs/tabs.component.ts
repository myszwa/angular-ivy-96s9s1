import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  nazwaFormularza: FormGroup;
  constructor() {}

  @ViewChild('tabgroup') tabgroup;

  ngOnInit() {
    this.nazwaFormularza = new FormGroup({
      name: new FormControl(),
      space: new FormControl(),
      style: new FormControl(),
      primaryColor: new FormControl(),
      complementaryColor: new FormControl(),
      accentColor: new FormControl(),
    });
  }

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
