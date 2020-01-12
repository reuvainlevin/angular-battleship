import { getCols$, getRows$ } from './../../store/selectors/feature-board-specs.selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/interfaces/app-state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { toArray } from 'src/app/modules/toArray';

@Component({
  selector: 'app-sb-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {
  rows$: Observable<number[]>;
  cols$: Observable<number[]>;
  constructor (private store: Store<AppState>) { }

  ngOnInit() {
    this.rows$ = this.store.pipe(
      select(getRows$),
      map(rows => toArray(rows))
    );
    this.cols$ = this.store.pipe(
      select(getCols$),
      map(cols => toArray(cols))
    );
  }

}
