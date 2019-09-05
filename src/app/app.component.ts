import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'counter-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cService: CounterService) { }

  start = () => {
    this.cService.start();
  }

  stop = () => {
    this.cService.stop();
  }

  reset = () => {
    this.cService.reset();
  }
}
