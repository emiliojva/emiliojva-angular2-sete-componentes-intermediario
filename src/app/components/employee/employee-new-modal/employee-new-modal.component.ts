import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { EmployeeService, Employee } from 'src/app/services/employee-service';
import { ModalComponent } from '../../modal/modal.component';
import { Modalable } from '../../modal/modalable';

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.scss']
})
export class EmployeeNewModalComponent extends Modalable implements OnInit {

  employee: Employee;

  constructor(private element: ElementRef, public employeeService: EmployeeService) {
    super();
    this.onSubmit = new EventEmitter<Employee>();
    this.employee = {name:'',salary:0};
  }

  ngOnInit(): void {
  }

  addEmployee(event: Event){
    // event.preventDefault();
    let copy:Employee = Object.assign({}, this.employee);
    copy.bonus = copy.salary >= 1000 ? 0 : copy.bonus;
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }
 
}
