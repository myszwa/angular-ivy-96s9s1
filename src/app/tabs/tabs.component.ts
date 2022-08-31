import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  nazwaFormularza: FormGroup;
  autorFormularza: FormGroup;
  public color: string = '#ffffff';
  public color1: string = '#000000';
  public color2: string = '#444444';

  public onChangeColor(color: string): void {
    this.color = color;
    this.nazwaFormularza.patchValue({ color });
    console.log('Color changed:', color);
  }
  public onChangeColor1(color1: string): void {
    this.color1 = color1;
    this.nazwaFormularza.patchValue({ color1 });
    console.log('Color changed:', color1);
  }
  public onChangeColor2(color2: string): void {
    this.color2 = color2;
    this.nazwaFormularza.patchValue({ color2 });
    console.log('Color changed:', color2);
  }
  constructor(
    public vcRef: ViewContainerRef,
    private cpService: ColorPickerService
  ) {}

  @ViewChild('tabgroup') tabgroup;
  public onEventLog(event: string, data: any): void {
    console.log(event, data);
  }

  ngOnInit() {
    this.nazwaFormularza = new FormGroup({
      name: new FormControl(),
      space: new FormControl(),
      style: new FormControl(),
      color: new FormControl(),
      color1: new FormControl(),
      color2: new FormControl(),
    });

    this.autorFormularza = new FormGroup({
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      link: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });

    const obj = {
      name: '',
      space: '',
      style: '',
      primaryColor: '',
      complementaryColor: '',
      accentColor: '',
    };

    const obj1 = {
      author: '',
      link: '',
    };

    this.nazwaFormularza.patchValue(obj);
    this.autorFormularza.patchValue(obj1);
    this.nazwaFormularza.valueChanges.subscribe((el) => console.log(el));
    this.autorFormularza.valueChanges.subscribe((el) => console.log(el));
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
