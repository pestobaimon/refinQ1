import { TestBed } from '@angular/core/testing';
import { first10000Primes } from './data';
import { IsPrimeService } from './is-prime.service';

describe('IsPrimeService', () => {
  let service: IsPrimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsPrimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should evaluate all prime test numbers to true', () => {
    let result = true;
    let testSetIterator = 0;
    const start = performance.now();
    for (let i = 0; i <= first10000Primes[first10000Primes.length - 1]; i++) {
      if (i < first10000Primes[testSetIterator]) {
        // should be false (not prime)
        result = result && !service.isPrime(i);
      } else {
        // should be true (prime)
        result = result && service.isPrime(i);
        testSetIterator++;
      }
    }
    console.log(`estimate isPrime runtime:${performance.now() - start}`);
    expect(result).toBeTruthy();
  });
});
