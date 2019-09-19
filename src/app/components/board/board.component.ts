import { getRowsCols$, getCols$, getRows$ } from './../../store/selectors/feature-board-specs.selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/interfaces/app-state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sb-board',
  templateUrl: './board.component.html',
  styleUrls: [ './board.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {
  rows$: Observable<number[]>;
  cols$: Observable<number[]>;
  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.rows$ = this.store.pipe(
      select( getRows$ ),
      map( rows => this.toArray(rows) )
      );
    this.cols$ = this.store.pipe(
      select( getCols$ ),
      map( cols =>  this.toArray(cols) )
    );
  }

  toArray( length: number ): number[] {
    const newArray = [];
    for (let index = 0; index < length; index++) {
      newArray.push( index );
    }
    return newArray;
  }

}
