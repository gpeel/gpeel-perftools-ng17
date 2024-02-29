import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {PerftoolsModule} from '@gpeel/perftools';

// noinspection JSVoidFunctionReturnValueUsed

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, PerftoolsModule],
  template: `
    <refresh-count name="CHILD"></refresh-count>
    <div>Child Component works!</div>
    <button (click)="onClick()">ok</button>
  `
})
export class ChildComponent {

  onClick(){
    console.log('clicked !!');
  }
}

