import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../store/reducers/counter.reducer';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() count: State;

  constructor(private store: Store<{ count: {low: number; high: number} }>) { }

  ngOnInit() {
    this.store.pipe(select('count')).subscribe(val => {
      this.count = val;
    });
  }
}
