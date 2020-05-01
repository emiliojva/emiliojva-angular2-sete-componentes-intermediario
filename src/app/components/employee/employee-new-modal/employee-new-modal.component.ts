import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { EmployeeService, Employee } from 'src/app/services/employee-service';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.scss']
})
export class EmployeeNewModalComponent implements OnInit {

  employee: Employee;

  @Output()
  onSubmit:EventEmitter<Employee> = new EventEmitter<Employee>();
  @ViewChild(ModalComponent)
  modal:ModalComponent;

  constructor(private element: ElementRef, public employeeService: EmployeeService) {
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

  show(){
    this.modal.show()
  }

  hide(){
    this.modal.hide();
  }
 
}
