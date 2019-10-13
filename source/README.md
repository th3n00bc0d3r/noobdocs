# Noob Docs Source
![  Preview](https://i.ibb.co/v4scjRm/Screenshot-2019-10-13-at-7-32-00-PM.png)

The frontend that is the website is made using Angular 8. Please follow the following guide to set it up locally.

```
git clone https://github.com/th3n00bc0d3r/noobdocs.git
cd source
npm i
ng serve
```

You need to have the following for it to run;

- NodeJS and NPM
  https://nodejs.org/en/download/
- Angular 2 + and Angular CLI
  https://angular.io/guide/setup-local

I highly recommend Visual Studio Code, you can use any editor of your choice.

#### The Source Structure

source/src/app

![Source Structure](https://i.ibb.co/jJYC06K/Screenshot-2019-10-13-at-7-27-52-PM.png)

The whole application because of Angular is a module based application.

```
layout ## The Layout Module, think of it as a wrapper
-- frame ## This is where the content is loaded
-- header ## The Navigation of the Website
pages 
 -- article ## The Component for where your article is rendered
 -- categories ## Listing for Folders from Github
 -- home ## This is the Homepage where Readme.md is rendered
 -- wip ## Just a 404 Page not Found
services ## API List for communication
```

