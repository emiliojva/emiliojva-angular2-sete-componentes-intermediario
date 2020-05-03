import { ViewChild, OnInit, EventEmitter, Output, Component } from '@angular/core';
import { ModalComponent } from './modal.component';

declare const $;

export class Modalable{

  id:string;

  @Output()
  onShow:EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onHide:EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(ModalComponent)
  modal:ModalComponent;

  constructor(){
    console.log(this);
  }

  show(){
    /**
     * Apenas quando o modal for mostrado pela primeira vez
     */
    if(this.id==undefined){
      this.id = this.constructor.name;
      this.modal.onHide.subscribe( (e)=>{
        this.onHide.emit(e);
      });

      this.modal.onShow.subscribe( (e)=>{
        this.onShow.emit(e);
      })
    }

    this.modal.show();
  }

  hide(){
    this.modal.hide();
  }


}