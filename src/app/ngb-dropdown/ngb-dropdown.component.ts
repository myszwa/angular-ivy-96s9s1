import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ngb-dropdown',
  templateUrl: './ngb-dropdown.component.html',
  styleUrls: ['./ngb-dropdown.component.scss'],
})
export class NgbDropdownComponent implements OnInit {
  expandedList: boolean = false;
  // @Input() extendedList: any[];
  extendedList: any = [
    'Wszystkie',
    'Płyty wiórowe',
    'HDF',
    'Blaty robocze',
    'Obrzeża papierowe',
    'Folie',
    'Śccianki przyblatowe',
    'Laminaty i obrzeża HPL',
    'Płyty laminowane',
  ];
  @Input() choosenItem: string;
  @Output() choosenItemChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
  expandList() {
    this.expandedList = !this.expandedList;
  }

  selectItem(item: any) {
    this.choosenItem = item;
    this.choosenItemChange.emit(item);
  }
}
