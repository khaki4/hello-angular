import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  /**
   * 부모 컴포넌트에 이벤트 전달 방법
   */
  @Output() clickEvent = new EventEmitter();

  constructor() { }


  start($event: MouseEvent) {
    this.clickEvent.emit('change!');
  }

  ngOnInit() {
  }

}
