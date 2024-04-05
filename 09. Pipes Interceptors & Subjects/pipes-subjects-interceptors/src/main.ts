import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  map,
} from 'rxjs';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// REFRESHER

// const p = new Promise((resolve, reject) => {
//   resolve(100);
// });

// p.then(console.log);

// const observable$ = new Observable<number>((observer) => {
//   observer.next(101);
//   observer.next(102);
//   observer.next(103);

//   // obs.error(new Error('Something went wrong'));
//   // obs.complete();

//   return () => {
//     // Cleanup
//   };
// });

// observable$.subscribe(console.log);

// observable$.pipe(map((n) => n + 1)).subscribe({
//   next: console.log,
//   error: (err) => console.error('Error from subscribe:', err),
//   complete: () => console.log('Completed!'),
// });

//! Subjects

// const subject$$ = new Subject();
// subject$$.subscribe((data) => console.log('A: ', data)); // A
// subject$$.next(100);
// subject$$.next(1010);
// subject$$.next(105);

// subject$$.subscribe((data) => console.log('B: ', data)); // B
// subject$$.next(200);
// subject$$.next(2010);
// subject$$.next(205);

//* Behaviour subjects

// const bSubject$$ = new BehaviorSubject(100);
// bSubject$$.subscribe((data) => console.log('Subscription 1', data));

// setTimeout(() => {
//   bSubject$$.next(200);
//   bSubject$$.subscribe((data) => console.log('Subscription 2', data));

//   setTimeout(() => {
//     bSubject$$.next(300);
//     bSubject$$.subscribe((data) => console.log('Subscription 3:', data));
//   }, 2000);
// }, 2000);

//* Replay Subjects

// const rSubject$$ = new ReplaySubject(5);
// rSubject$$.subscribe((data) => console.log(`Plamen: ${data} minute`));
// rSubject$$.next(1000);

// for (let i = 1; i <= 30; i++) {
//   rSubject$$.next(i);
// }

// console.log('---------------------------------');

// rSubject$$.subscribe((data) => console.log(`Viki: ${data} minute`));

//* Async Subject

const aSubject$$ = new AsyncSubject();
aSubject$$.next(1);
aSubject$$.next(2);
aSubject$$.next(3);
aSubject$$.subscribe((data) => console.log(`Sub 1: ${data}`));
aSubject$$.next(4);
aSubject$$.complete();
