// const o = new Observable((observer) => {
//   observer.next(200);
//   observer.next(201);
//   observer.next(202);
// });

import { interval, map } from "rxjs";

// o.subscribe((data) => {
//   console.log('from observable', data);
// });

// const interval = (intervalValue: number) => {
//   const o = new Observable<number>((observer) => {
//     let counter = 0;
//     const timer = setInterval(() => {
//       observer.next(counter++);
//     }, intervalValue);

//     return () => {
//       //clear data on destroy
//       clearInterval(timer);
//     };
//   });

//   return o;
// };

const stream$ = interval(2000)
  .pipe(map((x) => x * 2))
  .pipe(map((x) => x * 10));

stream$.subscribe((data) => console.log(data));
stream$.subscribe({
  next: (data) => console.log(data),
  error: (error) => console.error('err:', error),
  complete: () => console.log('The stream has completed.')
});
