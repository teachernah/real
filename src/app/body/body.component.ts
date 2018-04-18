import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit  {


  constructor() { }

  ngOnInit() {
  }
//   links: QueryList<RouterLink>;
//   linksWithHrefs(): QueryList<RouterLinkWithHref>;
//   get isActive(): boolean;
//   routerLinkActiveOptions(): {...};
//   ngAfterContentInit(): void;
//   set routerLinkActive(): string[] | string
//   ngOnChanges(changes: SimpleChanges): void;
//   ngOnDestroy(): void;
// }

}
