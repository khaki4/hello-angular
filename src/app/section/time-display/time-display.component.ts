import {Component, Input, OnInit, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: string;

  constructor() {
    console.log(this.inputData);
  }

  ngOnInit() {


  }

  ngOnChanges(changes: SimpleChange) {
    console.log('changes:', changes);
  }
}
