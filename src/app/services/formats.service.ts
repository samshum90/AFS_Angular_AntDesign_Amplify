import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatsService {

  constructor() { }

  convertBoolean(boolean: boolean): string {
    return boolean ? "yes" : "no"
  };
}
