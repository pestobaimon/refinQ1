import { Injectable } from '@angular/core';
import { first73fibs } from './data';
@Injectable({
  providedIn: 'root',
})
export class IsFibService {
  constructor() {}
  isFib(n: number): boolean {
    //assuming 0 is not in the fib sequence
    if (n <= 0) return false;
    //check if binet LHS 5x^2 + 4 is a perfect square
    const binetLHS1 = 5 * n * n + 4;
    if (!Number.isSafeInteger(binetLHS1)) return first73fibs.includes(n);
    if (Number.isInteger(Math.sqrt(binetLHS1))) return true;

    //check if binet LHS 5x^2 - 4 is a perfect square
    const binetLHS2 = 5 * n * n - 4;
    if (!Number.isSafeInteger(binetLHS2)) return first73fibs.includes(n);
    if (Number.isInteger(Math.sqrt(binetLHS2))) return true;

    //both LHS values are not perfect squares
    return false;
  }
  isFibCheat(n: number): boolean {
    return first73fibs.includes(n);
  }
}
