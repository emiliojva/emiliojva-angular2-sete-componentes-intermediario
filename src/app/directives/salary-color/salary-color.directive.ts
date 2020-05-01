import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {

  // @Input()
  // salaryColor: string;

  @Input()
  x:any;

  constructor(private element: ElementRef) {
    // setTimeout(()=>{
    //   // console.log(this.salaryColor);
    //   const activeElementDOM: HTMLElement = this.element.nativeElement; // DOM Element com diretiva aplicada
    //   const salary:number = parseFloat(this.salaryColor); // const valor:number = parseFloat(activeElementDOM.innerHTML);
    //   activeElementDOM.style.color = salary > 1000 ? 'green' : 'black';
    //   console.log(this.x);
    // },1000)

  }

  @Input()
  set salaryColor(value){
     const activeElementDOM: HTMLElement = this.element.nativeElement; // DOM Element com diretiva aplicada
     const salary:number = parseFloat(value); // const valor:number = parseFloat(activeElementDOM.innerHTML);
     activeElementDOM.style.color = salary > 1000 ? 'green' : 'black';
  }

}
