import { Component, OnInit, ElementRef } from '@angular/core';

declare const $; // declaração do jQuery Symbol, para anular chamada do tsconfig.json(compilador)

@Component({
  selector: 'modal',
  template: `
  <div class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class ModalComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
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
