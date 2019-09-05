import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { CounterReducer } from './store/reducers/counter.reducer';
import { AppComponent } from './app.component';
import { CounterService } from './counter.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/effects/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: CounterReducer}),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
