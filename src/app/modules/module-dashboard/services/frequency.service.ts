import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type FrequencyExpected = "daily" | "weekly" | "monthly";


@Injectable()

export class FrequencyService {

 private frequencyStateSource = new BehaviorSubject<FrequencyExpected>("weekly");
 frequencyStateEvent: Observable<FrequencyExpected> = this.frequencyStateSource.asObservable();

constructor() { }

changeFrequencyState(frequency: FrequencyExpected) {
  this.frequencyStateSource.next(frequency);
}

getCurrentFrequencyState(): string {
  return this.frequencyStateSource.getValue();
}

}
