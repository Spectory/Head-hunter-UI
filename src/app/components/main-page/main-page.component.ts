import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  name = 'Zvika';

  mainPageCounter = -99;

  @select(appstate => appstate.counter.count) readonly count$: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.count$.subscribe(counter => {
      console.log('counter ', counter);
      this.mainPageCounter = counter;
    })
  }

  onClick = (param: string) => {
    console.log('who are you ? ', param);
  }

}
