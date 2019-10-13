import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from 'src/app/services/myservice.service';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home2',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  gitPath = '';
  topics: any = [];

  breadcrumbs: any = [];

  constructor(
    private http: HttpClient,
    private mycon: MyserviceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {    


    var fullpath = '';
    this.activatedRoute.snapshot.url.forEach(elem => {
      fullpath = fullpath + '/' + elem.path;
      var d = {
        name: elem.path,
        path: fullpath
      }
      this.breadcrumbs.push(d);
    });

    this.titleService.setTitle(this.breadcrumbs[this.breadcrumbs.length - 1].name);
    
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.getList(this.mycon.gitAPIURL + this.router.url.replace('/docs/', ''))
          .then(
            (dirs: []) => {
              if (dirs.length != 0) {
                this.topics = [];
                dirs.forEach(dir => {
                  if (dir['type'] === "dir") {
                    var myVar = {
                      "name": dir['name'],
                      "path": dir['path'],
                    }
                    this.topics.push(myVar);
                  } else {
                    //File Exists
                  }
                });
              }
            },
            (err) => {
              console.log(err);
            }
          );
      }
    });
  }


  ngOnInit() {

  }

  furtherFetch(row) {
    this.getList(this.mycon.gitAPIURL + row.path)
      .then(
        (dirs: []) => {
          if (dirs.length != 0) {
            this.topics = [];
            dirs.forEach(dir => {
              if (dir['type'] === "dir") {
                var myVar = {
                  "name": dir['name'],
                  "path": dir['path'],
                }
                this.topics.push(myVar);
              } else {
                //File Exists

              }
            });
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getList(url) {
    return new Promise((resolve, reject) => {
      this.http.get(url,{
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      })
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
