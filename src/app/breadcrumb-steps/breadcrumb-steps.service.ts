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

    currentStep(step: number) {
        this.stepChanged.next(step);
    }

    headClass(class_: string) {
        this.headClassChanged.next(class_);
    }

}