import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { EmployeeService, Employee } from 'src/app/services/employee-service';
import { Modalable } from '../../modal/modalable';

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.scss']
})
export class EmployeeNewModalComponent extends Modalable implements OnInit {

  employee: Employee;

  @Output()
  onSubmit:EventEmitter<any> = new EventEmitter<Employee>();

  constructor(public employeeService: EmployeeService) {
    super();
    // console.log('new employee new modal');
    this.employee = {name:'',salary:0};
  }
  
  /**
   * Cycle life - ngOnInit
   * Um Hook de ciclo de vida chamado após Angular inicializou todas as propriedades ligadas a dados de uma diretiva. 
   * Defina um método ngOnInit () para lidar com quaisquer tarefas adicionais de inicialização.
   * MONITORA CICLO DE VIDA APENAS DO COMPONENTE RAIZ. 
   * NÃO SERÃO MONITORADOS CICLO DE VIDA DOS FILHO
   * @see https://angular.io/api/core/OnInit
   */
  ngOnInit(): void {
    // console.log('ngOnInit');
  }

  /**
   * Cycle life - Um Hook de ciclo de vida chamado depois que o Angular inicializou completamente a exibição de um componente. 
   * Defina um método ngAfterViewInit() para lidar com quaisquer tarefas adicionais de inicialização.
   * MONITORA CICLO DE VIDA COMPONENTE RAIZ E FILHOS. 
   * TODOS OS CHILDS ESTARÃO DISPONÍVEIS
   * @see https://angular.io/api/core/AfterViewInit
   */
  ngAfterViewInit(){
    // console.log('ngAfterViewInit');
    // console.log(`EXISTE MODAL ${!!this.modal}`);
    // super.ngOnInit();
  }

  addEmployee(event: Event){
    // event.preventDefault();
    let copy:Employee = Object.assign({}, this.employee);
    copy.bonus = copy.salary >= 1000 ? 0 : copy.bonus;
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }
 
  
  onShowModal(){
    console.log('show modal');
  }

  onHideModal(){
    console.log('hide modal');
  }


}