import {Component} from '@angular/core';

// noinspection JSVoidFunctionReturnValueUsed

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    {{onDomRefreshComponent()}}
    <div>Child Component works!</div>
    <button (click)="onClick()">ok</button>
  `
})
export class ChildComponent {
  counterDom = 1;

  onDomRefreshComponent() {
    console.log('**** component CHILD', this.counterDom++);
    // return this.counterDom; // to test infamous ExpressionChangedAfterItHasBeenCheckedError:
  }

  onClick(){
    console.log('clicked !!');
  }
}

