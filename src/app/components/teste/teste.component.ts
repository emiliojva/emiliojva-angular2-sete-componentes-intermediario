import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'teste',
  template: `
    <p>
      teste component inline-template e inline-style!
    </p>
    <em>
    ng g component ./components/teste --inline-template --inline-style
    </em>
  `,
  styles: [
  ]
})
export class TesteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
