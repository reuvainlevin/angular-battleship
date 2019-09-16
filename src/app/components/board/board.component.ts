import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sb-board',
  templateUrl: './board.component.html',
  styleUrls: [ './board.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {
  rows = [ 0, 1, 2, 3, 4, 5, 6 ];
  cols = [ 0, 1, 2, 3, 4, 5, 6 ];
  constructor() { }

  ngOnInit() {
  }

}
