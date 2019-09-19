import { ISquare } from './../../store/interfaces/square';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/interfaces/app-state';
import { Observable } from 'rxjs';
import { getSquare$ } from 'src/app/store/selectors/feature-board.selectors';
import * as images from '../../images/images-api';
import { tap, filter } from 'rxjs/operators';

@Component( {
  selector: 'app-sb-square',
  templateUrl: './square.component.html',
  styleUrls: [ './square.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class SquareComponent implements OnInit {
  @Input() row: number;
  @Input() col: number;
  square$: Observable<ISquare>;
  image: string;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.square$ = this.store.pipe(
      select( getSquare$, { row: this.row, col: this.col } ),
      filter( square => square ? true : false),
      tap( ( square: ISquare ) => {
        if ( square.boatPart ) {
          this.image = images[square.boatPart.boatImagePath];
        }
        console.log( square );
      } )
    );
  }

}
