import { Component } from '@angular/core';

@Component({
    selector: 'student-list',
    template: `
    <student [name]="studentNames[0]" (studentSelected)="onStudentSelcted($event)"></student>
    `
})


export class StudentList {
    studentNames = ['张三', '李四', '王五'];

    constructor() {

    }

    onStudentSelcted(name: string) {
        console.log('选中了学生:' + name);
    }
}