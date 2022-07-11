import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'john doe';
  date: string = ''
  amount: number = 0

  onNameChange({ target }: Event) {
    const { value } = target as HTMLInputElement;
    this.name = value;
  }
  onDateChange({ target }: Event) {
    const { value } = target as HTMLInputElement;
    this.date = value;
  }
  onAmountChange({ target }: Event) {
    const { value } = target as HTMLInputElement;
    this.amount = parseInt(value);
  }
}
