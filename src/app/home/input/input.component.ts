import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input()
  input: number = 0;

  @Output()
  inputEmitter = new EventEmitter<number>();

  ngOnInit(): void {}

  onChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const max_chars = 15;
    if (target.value.length > max_chars) {
      target.value = target.value.substring(0, max_chars);
    }
    if (target.value.length <= max_chars)
      this.inputEmitter.emit(Number(target.value));
  }
}
