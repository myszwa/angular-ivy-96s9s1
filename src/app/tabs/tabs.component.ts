import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      name: new FormControl(''),
      space: new FormControl(),
      style: new FormControl(),
      primaryColor: new FormControl('', [
        // Validators.required,
        // Validators.minLength(6),
        // Validators.maxLength(6),
      ]),
      complementaryColor: new FormControl('', [
        // Validators.required,
        // Validators.minLength(6),
        // Validators.maxLength(6),
      ]),
      accentColor: new FormControl('', [
        // Validators.required,
        // Validators.minLength(6),
        // Validators.maxLength(6),
      ]),
    });

    const obj = {
      name: '',
      space: '',
      style: '',
      primaryColor: '',
      complementaryColor: '',
      accentColor: '',
    };

    this.nazwaFormularza.patchValue(obj);

    this.nazwaFormularza.valueChanges.subscribe((el) => console.log(el));
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

  zatwierdz() {
    // console.log(this.nazwaFormularza.value);
    // console.log(this.nazwaFormularza.valid);
    // console.log(this.nazwaFormularza.get('wlasciwosc1').value);
    // console.log(this.nazwaFormularza.valid);
    // console.log(this.nazwaFormularza.invalid);
    // console.log(this.nazwaFormularza.pending);
    // console.log(this.nazwaFormularza.pristine);
    // console.log(this.nazwaFormularza.dirty);
    // console.log(this.nazwaFormularza.touched);
    // console.log(this.nazwaFormularza.untouched);
  }
}
