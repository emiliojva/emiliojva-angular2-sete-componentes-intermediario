/**
 * PACOTE Implementa a funcionalidade principal
 * Os serviços de baixo nível e os utilitários da Angular. 
 * Define a infraestrutura de classe para componentes, exibe hierarquias, detecção de alterações, renderização e manipulação de eventos. 
 * Define os decoradores que fornecem metadados e contexto para construções angulares. Define a infraestrutura para injeção de dependência (DI), internacionalização (i18n) e vários recursos de teste e depuração.
 * @see https://angular.io/api/core#ngmodules
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './_app-root/app.component';

import { SalaryColorDirective } from './directives/salary-color/salary-color.directive';

import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';

import { EmployeeNewModalComponent } from './components/employee/employee-new-modal/employee-new-modal.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeNewComponent } from './components/employee/employee-new/employee-new.component';
import { EmployeeEditModalComponent } from './components/employee/employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from './components/employee/employee-delete-modal/employee-delete-modal.component';
import { TesteComponent } from './components/teste/teste.component';
import { ModalComponent } from './components/modal/modal.component';
import { TestNgContentComponent } from './components/test-ng-content/test-ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    EmployeeEditModalComponent,
    EmployeeDeleteModalComponent,
    SalaryColorDirective,
    EmployeeNewModalComponent,
    AlertSuccessComponent,
    MyCurrencyPipe,
    TesteComponent,
    ModalComponent,
    TestNgContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }