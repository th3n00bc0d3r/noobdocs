import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from 'src/app/services/myservice.service';

var showdown  = require('showdown');


@Component({
  selector: 'app-landing',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  generatedHtml = '';

  constructor(
    private http: HttpClient,
    private mycon: MyserviceService
  ) { }

  ngOnInit() {
    var url = this.mycon.gitHomeReadMe;
    this.getRequest(url)
      .then(
        (res) => {
          var converter = new showdown.Converter();
          this.generatedHtml = converter.makeHtml(res);          
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getRequest(url) {
    return new Promise((resolve, reject) => {
      this.http.get(url, {responseType: 'text'})
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        )      
    });
  }

}
