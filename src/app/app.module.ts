import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { GridTileComponent } from './components/grid-tile/grid-tile.component';
import { GameGridComponent } from './components/game-grid/game-grid.component';
import { NumberTileComponent } from './components/number-tile/number-tile.component';
import { IconCrossComponent } from './components/icons/icon-cross/icon-cross.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { WinScreenComponent } from './components/win-screen/win-screen.component';
import { MinimapComponent } from './components/minimap/minimap.component';
import { DesktopControlsComponent } from './components/desktop-controls/desktop-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    IconButtonComponent,
    GridTileComponent,
    GameGridComponent,
    NumberTileComponent,
    IconCrossComponent,
    SplashScreenComponent,
    WinScreenComponent,
    MinimapComponent,
    DesktopControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
