import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  public dots = 0;
  private setIntervalId: number | undefined;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.dots = this.dots === undefined || this.dots === 3 ? 0 : this.dots + 1;
    }, 200);
  }

  ngOnDestroy(): void {
    if (typeof this.setIntervalId === 'number') {
      clearInterval(this.setIntervalId);
    }
  }

}
