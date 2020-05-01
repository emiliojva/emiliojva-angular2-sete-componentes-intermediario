import { Component } from '@angular/core';

@Component({
  selector: 'alert-success',
  template: `
    <div class="alert alert-success" role="alert">
      <ng-content></ng-content>
    </div>`,
  styles: ['.alert { text-transform:uppercase}'],
})
export class AlertSuccessComponent {}
