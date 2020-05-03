import { Component, OnInit, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { EmployeeService, Employee } from 'src/app/services/employee-service';
import { Modalable } from '../../modal/modalable';

declare const $;

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.scss']
})
export class EmployeeEditModalComponent extends Modalable implements OnInit {

  @Output()
  onSubmit:EventEmitter<Employee> = new EventEmitter<Employee>();

  @Input()
  employee: Employee;

  constructor(public employeeService: EmployeeService) {
    super();
  }


  ngOnInit(): void {
  }

  addEmployee(event: Event){
    // event.preventDefault();
    let copy:Employee = Object.assign({}, this.employee);
    copy.bonus = copy.salary >= 1000 ? 0 : copy.bonus;
    // this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }

}
