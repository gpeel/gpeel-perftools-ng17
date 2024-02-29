import {Component, DoCheck} from '@angular/core';
import {ChildComponent} from './child.component';

// noinspection JSVoidFunctionReturnValueUsed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ChildComponent],
  template: `
    {{onDomRefresh()}}
    <div>App Component works!</div>
    <app-child></app-child>
  `
})
export class AppComponent implements DoCheck {
  counterDom = 1;
  counterCD = 1;

  ngDoCheck(): void {
    console.log('*********************** CD', this.counterCD++);
  }

  onDomRefresh() {
    console.log('************* dom', this.counterDom++);
    // return this.counterDom; // to test infamous ExpressionChangedAfterItHasBeenCheckedError !
  }
}

