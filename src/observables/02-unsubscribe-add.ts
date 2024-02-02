import { Observable, Observer, Subscriber, subscribeOn } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next:', value), 
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable( subscriber => {

    // crear un cotador, 1 2 3 4 5 
    let count = 0; 

    const interval = setInterval(() => {
        // intervalo de cada segundo
        count++;
        subscriber.next(count)
        console.log(count);
        
    }, 1000);

    return () => {
        clearInterval(interval)
        console.log('intervalo destruido');
        
    }
}); 


const subs1= intervalo$.subscribe(observer);
const subs2= intervalo$.subscribe(observer);
const subs3= intervalo$.subscribe(observer);

subs1.add( subs2 )
subs1.add( subs3);

setTimeout(() => {
//    subs1.unsubscribe()
//    subs2.unsubscribe() 
//    subs3.unsubscribe()
   
   console.log('Completado timeout');
   
}, 3000);