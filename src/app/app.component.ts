import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-observable-basics';
  //constructor
  obs = new Observable((observer) => {
    console.log("Observable starts")
    observer.next("1")
    observer.next("2")
    observer.next("3")
    // observer.error("Error occured")
    // observer.complete()
    observer.next("4")
    observer.next("5")
  })

  //create
  obsUsingCreate = Observable.create(observer => {
    observer.next('1')
    observer.next('2')
    observer.next('3')

    observer.complete()
  })

  //of
  array1 = [1, 2, 3, 4, 5, 6, 7]
  array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  obsof2 = of(this.array1, this.array2);

  obsof3 = of(1, 2, 3);

  obsof4 = of('Hello', 'World');

  obsof5 = of(100, [1, 2, 3, 4, 5, 6, 7], "Hello World");

  //from
  array3 = [1, 2, 3, 4, 5, 6, 7]
  obsfrom1 = from(this.array3);

  obsfrom2 = from('Hello World');

  obsFrom3 = from(this.generateNos())

  promiseSource = from(new Promise(resolve => resolve('Hello World!')));
  obsFrom4 = from(this.promiseSource);


  ngOnInit() {
    this.obsFrom4.subscribe(
      val => { console.log(val) },
      error => { console.log(error) },
      () => { console.log("Completed") }
    )
  }

  *generateNos() {
    var i = 0;
    while (i < 5) {
      i = i + 1;
      yield i;
    }
  }
}
