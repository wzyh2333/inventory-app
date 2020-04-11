import { Component, Input } from "@angular/core";

@Component({
  selector: 'product-department',
  template: `
       <span *ngFor='let item of department;let i =index'>
            <a href='#'>{{item}}</a>
            <span>{{i < (department.length-1) ? '>' : ''}}</span>
       </span>
    `,
  styles: ['a {margin: 0 0.5rem;}']
})
export class ProductDepartmentComponent {
  @Input() department: string[];

  constructor() {

  }
}