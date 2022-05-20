import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsPrimeService {
  constructor() {}
  isPrime(n: number): boolean {
    if (n == 2 || n == 3) return true;
    if (n % 2 === 0 || n % 3 === 0 || n <= 1) return false;
    // prime number division test after 3 in the form 6k +- 1
    // start with i = 6(1) - 1 and increment i by 6
    for (let i = 5; i * i <= n; i += 6)
      if (n % i === 0 || n % (i + 2) === 0) return false;
    return true;
  }
}
