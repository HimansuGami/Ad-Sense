import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from 'src/Components/pipes/pipes.component';
import { TruncatePipePipe } from './Pipes/truncate-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    TruncatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
