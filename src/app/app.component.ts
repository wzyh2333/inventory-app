import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-app';
  imgUrl: string;
  url: string;

  constructor() {
    this.title = 'Hello';
    this.imgUrl = './assets/imgs/ng-book2.png';
    this.url = 'https://www.baidu.com';
  }

  onBtnClicked() {
    console.log('hhh');
  }

  onInput(evt: Event) {
    this.title = (<HTMLInputElement>evt.target).value;
  }
}
