import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { EmployeeService, Employee } from 'src/app/services/employee-service';

declare const $;

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.scss']
})
export class EmployeeDeleteModalComponent implements OnInit {

  employee: Employee;

  @Output()
  onDestroy: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef, public employeeService: EmployeeService) {
    this.employee = {name:'',salary:0};
  }

  ngOnInit(): void {
  }

  destroyEmployee(event){
    console.log(event);
    this.employeeService.destroyEmployee(this.employee)
    this.onDestroy.emit(this.employee);
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
