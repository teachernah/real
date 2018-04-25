import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
feature = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  featureSelected() {
    this.feature.emit();
  }

}
