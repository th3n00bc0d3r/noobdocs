import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/services/myservice.service';

var marked    = require('marked');
var showdown  = require('showdown');

declare var $: any;



@Component({
  selector: 'app-details2',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  sideLinks = [];
  generatedHtml: any;
  breadcrumbs: any = [];

  pageTitle = '';
  fullpath = '';
  linkPath = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private mycon: MyserviceService,
    private activatedRoute: ActivatedRoute
  ) { 

    this.fullpath = '';
    this.activatedRoute.snapshot.url.forEach(elem => {
      this.fullpath = this.fullpath + '/' + elem.path;
      var d = {
        name: elem.path,
        path: this.fullpath
      }
      this.breadcrumbs.push(d);
    });    

    this.pageTitle = this.breadcrumbs[this.breadcrumbs.length - 1].name;

    //console.log(this.router.url);
    this.linkPath = this.router.url;
  }



  ngAfterViewInit() {
    $('button').click(function(e) {
      e.preventDefault();
      alert('Hello World');
    });

    var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
      var height = affixElement.outerHeight(),
          top = wrapper.offset().top;
      
      if (scrollElement.scrollTop() >= top){
          wrapper.height(height);
          affixElement.addClass("affix");
      }
      else {
          affixElement.removeClass("affix");
          wrapper.height('auto');
      }
        
    };
    
  
    $('[data-toggle="affix"]').each(function() {
      var ele = $(this),
          wrapper = $('<div></div>');
      
      ele.before(wrapper);
      $(window).on('scroll resize', function() {
          toggleAffix(ele, $(this), wrapper);
      });
      
      // init
      toggleAffix(ele, $(window), wrapper);
    });


  }

  ngOnInit() {
    var url = this.mycon.gitAPIURL + this.router.url.replace('/docs/','');
    this.http.get(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
      .subscribe(
        res => {
          var fileList = res;
          this.getRequest(res[0].download_url)
            .then(
              (res) => {
                this.sideLinks = this.processLinks(res);
                this.getRequest(fileList[1].download_url)
                  .then(
                    (res) => {
                      var converter = new showdown.Converter();
                      this.generatedHtml = converter.makeHtml(res);
                    },
                    (err) => {
                      console.log(err);
                    }
                  );

              },
              (err) => {
                console.log(err);
              }
            );
        },
        err => {
          console.log(err);
        }
      )
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

  processLinks(markdown) {
    var data: any = [];

    var renderer = new marked.Renderer();

    // Taken from https://github.com/markedjs/marked/issues/1279
    var linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

    marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
    marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
    marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;

    renderer.link = function (href, title, text) {
      var myLink = {
        "title": text,
        "link": href
      }
      data.push(myLink);
    };    

    marked(markdown, { renderer: renderer });

    return data;
  }

  

}
