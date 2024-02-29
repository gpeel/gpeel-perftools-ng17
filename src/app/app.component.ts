import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {PerftoolsModule} from '@gpeel/perftools';
import {ChildComponent} from './child.component';

// noinspection JSVoidFunctionReturnValueUsed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,PerftoolsModule, ChildComponent],
  template: `
    <root-refresh-count></root-refresh-count>
    <div>App Component works!</div>
    <app-child></app-child>
  `
})
export class AppComponent {
}

