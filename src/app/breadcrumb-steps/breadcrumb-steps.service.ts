import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BreadCrumbStepsService {

    // Observable string sources
    private stepChanged = new Subject<number>();
    private headClassChanged = new Subject<string>();

    // Observable string streams
    stepChanged$ = this.stepChanged.asObservable();
    headColorChanged$ = this.headClassChanged.asObservable();

    /**
     * Transmit information about the current step
     * to work with the step
     * 
     * @param step
     */
    currentStep(step: number) {
        this.stepChanged.next(step);
    }

    /**
     * Transmit information about the head class
     * if necessary to change
     * 
     * @param class_ 
     */
    headClass(class_: string) {
        this.headClassChanged.next(class_);
    }

}