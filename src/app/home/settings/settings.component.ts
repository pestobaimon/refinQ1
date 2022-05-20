import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
  @Input()
  modes: string[] = [];

  @Output()
  modeEmitter = new EventEmitter<'isPrime' | 'isFibonacci'>();

  constructor() {}

  ngOnInit(): void {}

  onChange(e: Event): void {
    const target = e.target as HTMLSelectElement;
    this.modeEmitter.emit(target.value as 'isPrime' | 'isFibonacci');
  }
}
