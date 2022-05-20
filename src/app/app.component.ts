import { Component, OnInit } from '@angular/core';
import { IsFibService } from './core/services/is-fib.service';
import { IsPrimeService } from './core/services/is-prime.service';
import { InputComponent } from './home/input/input.component';
import { OutputComponent } from './home/output/output.component';
import { SettingsComponent } from './home/settings/settings.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InputComponent, SettingsComponent, OutputComponent],
})
export class AppComponent {
  constructor(
    private isPrimeService: IsPrimeService,
    private isFibonacciService: IsFibService
  ) {}
  modes = ['isPrime', 'isFibonacci'];
  currentMode: 'isPrime' | 'isFibonacci' = 'isPrime';
  currentInput: number = 0;
  currentOutput: boolean = false;

  changeMode(mode: 'isPrime' | 'isFibonacci'): void {
    this.currentMode = mode;
    this.computeOutput(this.currentInput, this.currentMode);
  }

  changeNumber(n: number): void {
    this.currentInput = Math.round(n);
    this.computeOutput(this.currentInput, this.currentMode);
  }

  computeOutput(n: number, mode: 'isPrime' | 'isFibonacci'): void {
    if (mode === 'isPrime') {
      this.currentOutput = this.isPrimeService.isPrime(this.currentInput);
      console.log(`${n} prime: ${this.currentOutput}`);
    } else {
      this.currentOutput = this.isFibonacciService.isFib(this.currentInput);
      console.log(`${n} fib: ${this.currentOutput}`);
    }
  }
}
