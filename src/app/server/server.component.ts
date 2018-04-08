import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  showSecret = false;
  log = [];

  onToggleDetials() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date);
  }

  constructor() { }

  ngOnInit() {
  }

}
