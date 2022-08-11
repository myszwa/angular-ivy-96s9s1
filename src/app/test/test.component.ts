import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TestComponent implements OnInit {
  @ViewChild('adaptiveTab') tabObj: TabComponent;

  ngOnInit(): void;
  ngOnInit() {
    // this.tabObj.selectedItem = 3;
  }
  // Mapping Tab items Header property
  public headerText: Object = [
    { text: 'HTML' },
    { text: 'C Sharp(C#)' },
    { text: 'Java' },
    { text: 'VB.Net' },
    { text: 'Xamarin' },
    { text: 'ASP.NET' },
    { text: 'ASP.NET MVC' },
    { text: 'JavaScript' },
  ];

  public index = 2;
}
