import { SearchDirective } from './../search.directive';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showSearch: Boolean = false;
  navebarVisibility: boolean = true;

  toggleSearchButton(value: Boolean) {
    this.showSearch = value;
  }

  toggleNavebar(value: boolean) {
    this.navebarVisibility = value;
  }
}
