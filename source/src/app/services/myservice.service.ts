import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  //Trailing Slash
  gitAPIURL = 'https://api.github.com/repos/th3n00bc0d3r/noobdocs/contents/'
  gitHomeReadMe = 'https://raw.githubusercontent.com/th3n00bc0d3r/noobdocs/master/README.md';
  
  constructor() { }
}
