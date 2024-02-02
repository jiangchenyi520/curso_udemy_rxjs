import { Observable, Observer, Subscriber, subscribeOn } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value), 
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('completador[obs]')
};

const obs$ = new Observable(subs => {

    subs.next('HOLAAA')
    subs.next('Mundoooo')
    subs.next(1)

    subs.next('HOLAAA')
    subs.next('Mundoooo')

    // subs.complete(); 
    
    subs.next('HOLAAA')
    subs.next('Mundoooo')

    subs.complete(); 
}); 

obs$.subscribe(observer)


// obs$.subscribe(
//     valor => console.log('next:' , valor),
//     error => console.log('error', error), 
//     () => console.log('completado')
    
// );


