import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getValues(val) {
    console.warn(val);
  }

  selectedIndex: number = 0;
  maxNumberOfTabs: number = 2;
  nextStep() {
    if (this.selectedIndex != this.maxNumberOfTabs && this.selectedIndex <= 1) {
      this.selectedIndex = this.selectedIndex + 1;
    }
    console.log(this.selectedIndex);
  }

  previousStep() {
    if (this.selectedIndex != 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
    console.log(this.selectedIndex);
  }
}
