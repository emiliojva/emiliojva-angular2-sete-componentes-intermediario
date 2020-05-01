import { Component, OnInit, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { EmployeeService, Employee } from 'src/app/services/employee-service';

declare const $;

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.scss']
})
export class EmployeeEditModalComponent implements OnInit {

  @Output()
  onSubmit:EventEmitter<Employee> = new EventEmitter<Employee>();

  @Input()
  employee: Employee;

  constructor(private element: ElementRef, public employeeService: EmployeeService) {

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

  show(){
    const divModal = this.getDivModal();
    $(divModal).modal('show');

  }

  hide(){
    const divModal = this.getDivModal();
    $(divModal).modal('hide')
  }

  getDivModal(): HTMLElement{
    const elementDOM:HTMLElement = this.element.nativeElement;
    // return elementDOM.firstElementChild as HTMLElement;
    return elementDOM.querySelector('.modal') as HTMLElement;
  }
}
