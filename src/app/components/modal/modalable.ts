import { ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from './modal.component';

export abstract class Modalable {

  @Output()
  onSubmit:EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(ModalComponent)
  modal:ModalComponent;

  show(){
    this.modal.show()
  }

  hide(){
    this.modal.hide();
  }

}