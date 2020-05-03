import { Component, OnInit, ViewChild } from '@angular/core';
// import {employees} from '../mocks/employees';
import { EmployeeService, Employee } from 'src/app/services/employee-service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  newEmployeeAdded: Employee;
  editedEmployee: Employee;
  destroyedEmployed: Employee;

  showMessageSuccess:boolean = false;
  employees: Array<Employee> = []; // employees: Array<Employee> = employees;

  // https://angular.io/api/core/ViewChild#description
  @ViewChild('employeeNewModal') // Pegar referencia de um elemento, no caso o EmployeeNewModalComponent. No caso de mais de diretiva dentro list Ele pega todas as instancias indexadas.
  employeeNewModal: EmployeeNewModalComponent;

  @ViewChild('employeeEditModal')
  employeeEditModal: EmployeeEditModalComponent;

  @ViewChild(EmployeeDeleteModalComponent)
  employeeDeleteModal: EmployeeDeleteModalComponent;

  data:Date = new Date('1981-08-13');

  constructor(public employeeService:EmployeeService) {
    this.employees = this.employeeService.employees;
  }

  ngOnInit(): void {
  }

  getSalaryColor(employee: Employee){
    return employee.salary > 1000 ? 'green' : 'black';
  }

  showNewEmployeeModal(employee:Employee){
    this.employeeNewModal.show();
  }

  showEditEmployeeModal(employee:Employee){
    // this.employeeService.employeeEdit = employee;
    this.editedEmployee = employee;
    this.employeeEditModal.show();
  }

  showDeleteEmployeeModal(employee: Employee){
    this.employeeDeleteModal.employee = employee;
    this.employeeDeleteModal.show();
  }

  onNewEmployee(employee: Employee){
    this.newEmployeeAdded = employee;
    this.showMessageSuccess = true;
  }

  onEditEmployee(employee: Employee){
    this.newEmployeeAdded = employee;
    this.showMessageSuccess = true;
  }

  onDestroyEmployee(event){
    console.log(event);
    this.employeeDeleteModal.hide();
  }

  onShowModal(event: Event){
    console.log('showModal',event);
  }

  onHideModal(event: Event){
    console.log('hideModal',event);
  }

}
