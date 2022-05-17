import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Poll } from './poll';

@Injectable()
export class PollService {

  constructor(private http: HttpClient) { }
  generateId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
