import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<b>page1</b> <button routerLink="/page2">Go to page 2</button>`,
})
export class Page1Component {
  title = 'web-project';
}
