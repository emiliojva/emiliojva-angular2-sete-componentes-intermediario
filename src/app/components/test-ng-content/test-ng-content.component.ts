import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-content',
  template: `
    <section>
      <p>
        <ng-content select="modal"></ng-content>
      </p>

      <p>
        <ng-content select="div"></ng-content>
      </p>

      <p>
        <ng-content select="[bunda]"></ng-content>
      </p>

    </section>
  `,
  styles: [
  ]
})
export class TestNgContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
