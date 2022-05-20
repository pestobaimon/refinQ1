import { TestBed } from '@angular/core/testing';
import { first35fibs } from './data';
import { IsFibService } from './is-fib.service';

describe('IsFibService', () => {
  let service: IsFibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsFibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should evaluate all fib test numbers to true', () => {
    let result = true;
    let testSetIterator = 0;
    const start = performance.now();
    for (let i = 0; i <= first35fibs[first35fibs.length - 1]; i++) {
      if (i < first35fibs[testSetIterator]) {
        // should be false (not fib)
        result = result && !service.isFib(i);
        if (!result) console.log(`${i} should not be fib!`);
      } else {
        // should be true (fib)
        result = result && service.isFib(i);
        if (!result) console.log(`${i} should be fib!`);
        testSetIterator++;
      }
    }
    console.log(`estimate isFib runtime:${performance.now() - start}`);
    expect(result).toBeTruthy();
  });
});
