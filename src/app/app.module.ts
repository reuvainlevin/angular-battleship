import { BoardEffects } from './store/feature-board/effects/feature-board.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/app-state';
import { SquareComponent } from './components/square/square.component';
import { BoardComponent } from './components/board/board.component';
import { EffectsModule } from '@ngrx/effects';
import { GameComponent } from './components/game/game.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    GameComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      reducers,
      {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }),
    EffectsModule.forRoot([
      BoardEffects
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
