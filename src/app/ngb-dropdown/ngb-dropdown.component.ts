import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ngb-dropdown',
  templateUrl: './ngb-dropdown.component.html',
  styleUrls: ['./ngb-dropdown.component.scss'],
})
export class NgbDropdownComponent implements OnInit {
  dropdownFlag = false;
  expandedList: boolean = false;

  extendedList = [
    { name: 'Kuchnia' },
    { name: 'Łazienka' },
    { name: 'Salon' },
    { name: 'Sypialnia' },
  ];
  @Input() choosenItem: any;
  @Output() choosenItemChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  expandList() {
    this.expandedList = !this.expandedList;
  }

  selectItem(item: any) {
    this.choosenItem = item;
    this.choosenItemChange.emit(item);
  }
}
