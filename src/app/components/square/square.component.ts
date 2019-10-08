import { ISquare } from './../../store/interfaces/square';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/interfaces/app-state';
import { Observable } from 'rxjs';
import { getSquare$ } from 'src/app/store/selectors/feature-board.selectors';
import * as images from '../../images/images-api';
import { filter, map } from 'rxjs/operators';
import { click } from 'src/app/store/actions/feature-board-state.actions';

@Component( {
  selector: 'app-sb-square',
  templateUrl: './square.component.html',
  styleUrls: [ './square.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class SquareComponent implements OnInit {
  @Input() row: number;
  @Input() col: number;
  @Input() id: string;

  square$: Observable<ISquare>;
  image$: Observable<string>;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    const tmpSquare$ = this.store.pipe(
      select( getSquare$, { id: this.id } ),
      filter( sq => sq ? true : false )
    );

    this.square$ = tmpSquare$;

    this.image$ = tmpSquare$.pipe(
      map(
        sq => ( sq && sq.boatPart && sq.boatPart.isHit ) ? images[ sq.boatPart.boatImagePath ] : images[sq.imagePath]
      )
    );
  }


  click( square: ISquare ) {
    this.store.dispatch( click( { square } ) );
  }

}
