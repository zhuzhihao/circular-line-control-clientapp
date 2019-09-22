import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, throwError } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Floor plan', cols: 1, rows: 3 },
          { title: 'Card 2', cols: 1, rows: 3 },
          { title: 'Card 3', cols: 1, rows: 3 }
        ];
      }

      return [
        { title: 'Floor plan', cols: 2, rows: 3 },
        { title: 'Card 2', cols: 1, rows: 2 },
        { title: 'Card 3', cols: 1, rows: 2 },
      ];
    })
  );

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
