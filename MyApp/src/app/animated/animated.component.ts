import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-animated',
  templateUrl: './animated.component.html',
  styleUrls: ['./animated.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(110%)' })),
      transition('out => in', animate('600ms ease-in')),
      transition('in => out', animate('600ms ease-out'))
    ])
  ]
})
export class AnimatedComponent implements OnInit {

  state = 'out';

  constructor() { }

  ngOnInit() {
    window.setTimeout(() => {
      this.state = 'in';
    }, 200);
  }

  toggleState() {
    this.state = this.state === 'in' ? 'out' : 'in';
  }

}
