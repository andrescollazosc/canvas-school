import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-google',
  templateUrl: './button-google.component.html',
  styleUrls: ['./button-google.component.scss'],
})
export class ButtonGoogleComponent implements OnInit {
  @Input() labelBtn: string;

  @Output() resultEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
    if (!this.labelBtn) {
      this.labelBtn = 'Submit';
    }
  }

  public onClick(): void {
    this.resultEvent.emit(true);
  }
}
