import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  pure: true // by Default
})
export class ReducePipe<T> implements PipeTransform {
  transform(
    array: T[],
    callbackFn: (acc: any, curr: any) => any,
    initialValue: T
  ): unknown {
    // const sum = (acc, curr) => acc + curr; 
    // [1,2,3,4].reduce(sum, 0);
    return array.reduce(callbackFn, initialValue);
  }
}
