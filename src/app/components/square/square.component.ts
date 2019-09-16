import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/interfaces/app-state';

@Component({
  selector: 'app-sb-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareComponent implements OnInit {

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
  }

}
