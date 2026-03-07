import { makeAutoObservable, action } from "mobx";
import { propValidator } from "./Utils/PropValidator.js";
import type Example from "./Models/Example.js";

class ObservableAppState {

  exampleObject: Example | null = null;
  exampleArray: Example[] = [];
  activeExample: Example | null = null;

  constructor() {
    makeAutoObservable(this);
  }
}

export const AppState = new Proxy<ObservableAppState>(new ObservableAppState(), {
  get(target: ObservableAppState, prop: string | symbol) {

    propValidator(target as Record<PropertyKey, any>, prop);
    // Reflect.get safely retrieves the property without TypeScript indexing errors
    return Reflect.get(target, prop);
  },
  set(target: ObservableAppState, prop: string | symbol, value: any) {

    propValidator(target as Record<PropertyKey, any>, prop);

    action(() => {
      // Reflect.set safely assigns the dynamic property
      Reflect.set(target, prop, value);
    })();
    return true;
  }

});