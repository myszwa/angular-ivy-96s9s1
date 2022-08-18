import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  selectedCountry: any;

  cities: any;

  countries = [
    {
      id: 1,
      name: 'France',
      cities: ['Paris', 'Marseille', 'Nice'],
    },
    {
      id: 2,
      name: 'Germany',
      cities: ['Hamburg', 'Berlin', 'Munich'],
    },
    {
      id: 3,
      name: 'Italy',
      cities: ['Roma', 'Milan', 'Napoli'],
    },
  ];

  ngOnInit() {
    this.cities = this.countries.filter((x) => x.id == 1)[0].cities;
  }

  onChange(deviceValue) {
    this.cities = this.countries.filter((x) => x.id == deviceValue)[0].cities;
  }
}
