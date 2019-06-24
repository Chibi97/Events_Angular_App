import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration'})
// this pipe is enum inspired
export class DurationPipe implements PipeTransform {
    transform(value: number) {
        switch (value) {
            case 1: return 'Half Hour';
            case 2: return 'One Hour';
            case 3: return 'Half Day';
            case 4: return 'Full Day';
            default: return value.toString();
        }
    }
}
/*
 It is bad to use pipes for filtering and ordering lists bcz of the performance.
 The reason is simple: pipes are only re-run when the identity of objects are
 Identity is when object gets/loses reference. When new object is added to the
  list, it gains a reference, but if it is removed, the reference is garbage-collected.

 The problem here is, if we happen to change any field of the object (name: John
 (and it used to be Fred)) the pipe won't be re-run and we'd still see past state
 of the list. If we however use Impure Pipes (which run on EVERY change detection
 cycle) we get a BIG performance issuse if our list contains thousand of elems.

 It is better if we do filtering/ordering by ourselves, in the component where data is displayed.
*/
