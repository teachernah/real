import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
feature = new EventEmitter<string>();

onSelect(feature: string) {
  this.feature.emit();
}
}
