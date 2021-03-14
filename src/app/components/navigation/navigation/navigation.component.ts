import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @Input() activeDate: Date = new Date();
  @Output() nextMonth = new EventEmitter();
  @Output() prevMonth = new EventEmitter();

  next(): void {
    this.nextMonth.emit();
  }

  prev(): void {
    this.prevMonth.emit();
  }

}
