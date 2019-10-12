## Introduction

As of today, a program is an interface, a bridge between a computer and a user. There is another word that has been labeled to it, which is called an application. An application would be a good use of anyone's time in making themselves productive. Well, considering the smartphone count in regards to the personal computer count, there are more mobile applications than desktop applications. This leaves a very big grey area for the desktop users, in finding applications that are productive.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/0t9ld03zsgw5z7hmajme.jpg)

### The Process of Making Applications

Applications were once written using Machine Language, then came the Assembly Language, which was more readable, and today we have Javascript, in which we will be making our desktop application. Why Javascript, in particular? Because it is more human-readable and easy to use just like the natural human language.. It has basic minimum setup and literally runs everywhere.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/xybyod5zn1qksm0afcaa.jpg)

### Our Application Architecture

The MVC (Model View Controller) where Angular takes {place?} can be understood as a set of standard practices, a mechanism that helps to ensure that you don't spill your code out of your coffee cup, by helping you to organize your code internally and quickly fix the errors when they spew up. The model part strips the logic of an application and puts it another container, where it connects with others, but all logic is done there, so if you have some logical problems you don't have to open and search for all files. It manages all the data going in and out of the application. 

The view part of the MVC (Model View Controller) is where everything renders and comes into display on a browser. All the graphics and the text you see on a web page is where the view module of the MVC exists. The controller part is where all inputs from the user are handled and it relays all of that to the model and the view. Therefore, Angular is a Web Framework, that Google has maintained by individuals that help in developing applications that are known as SPA (Single Page Applications). It converts your application into a Model-View-Controller architecture. 

ElectronJS is another framework, that enables you to convert your web application or websites into an executable application that can take full use of all the windows, mac or Linux features of any operating system. 

Now Node.js is an environment on top of which all this resides. It helps everybody use Javascript to write English as a programming language that can be easily understood -. It is both server-side as well as client-side. It will help you serve your services and provide client-side logic as well. 

### Environment Installation Process 

We will be using a Windows 10 Operating System to Develop a starter application.

Download NodeJS
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Head over to the URL, and download the installer. The same website can be used to download NodeJS for other platforms as well. 

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/ig2fsei7m6kdyasejgjg.png)

Now run the installer and you should be welcomed with a NodeJS installer Screen. Click next and proceed. Select Custom Setup and check that install all from disk should be enabled especially Add to PATH. The Add to Path links the nodeJS directory to your environment paths which is like  global access to all commands and executable. 

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/n9fdgodp3pu3zxsu14c3.png)
![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/5io98cjoj8uh86vpxab0.png)

This is like you don't need to go to the NodeJS Directory to run the commands, the NodeJS commands will be accessible anywhere in any directory. Once the installation is finished, let's check if Node is successfully installed. To check that open the run dialog box from your start menu, Window Key + R Shortcut and type CMD and press enter. You should come to a command prompt.

![Alt Text]
(https://thepracticaldev.s3.amazonaws.com/i/942956urqsizdcqp6mzk.png)
![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/hg45ktvjmdm0ulvhnrdb.png)

Type in the following commands

```
Node -v 
Npm -v
```

It should give you the installed version. We have Node installed. Now let's install Angular. To install Angular use the following command

```
npm install -g @angular/cli
npm install typescript -g
```

### Setting Up the Project
To create a new Angular project we use the Angular command-line tool known as ng. Use the following command to create a new project.

```
Ng new myDesktopApp
Would you like to add Angular routing? Yes
Which stylesheet format would you like to use? SCSS
Cd myDesktopApp
npm i -D electron@latest

```

Now we need to create a main.js file which will be our entry point and modify package.json, tsconifg.json and angular.json.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/9ym47w7vtccptde7n8ou.png)

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/22fn7aytr6l5ky2wdc8j.png)

```
Angular.json

"outputPath": "dist",

Package.json
  "main": "main.js", 
  "scripts": {
    "electron": "ng build --base-href ./ && electron .",
    "electron-tsc": "tsc main.ts && ng build --base-href ./ && electron .",

Tsconfig.json
    "target": "es5",


Main.js

const { app, BrowserWindow } = require("electron");
const path  = require("path");
const url   = require("url");


let win;

// Create our App Window
app.on("ready", createWindow);

// Fix for MAC to Quite
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// Focus our Window
app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 });
  
    // Loading the Dist Folder
    win.loadURL(
        url.format({
        pathname: path.join(__dirname, `/dist/index.html`),
        protocol: "file:",
        slashes: true
        })
    );

    // Open Developer Tools
    win.webContents.openDevTools()

    //On Close Event
    win.on("closed", () => {
        win = null;
    });    
}
```

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/142cwh8r971ql6wxv1gd.png)

### Building the Project

```
npm install -g electron-builder
npm install electron-builder --save-dev

Now open Package.json
  "scripts": {
    "electron": "ng build --base-href ./ && electron .",
    "electron-tsc": "tsc main.ts && ng build --base-href ./ && electron .",
    "pack": "electron-builder --dir",
    "dist": "electron-builder",
  },
  "build": {
    "appId": "com.noobs.noobapp",
    "win": {
      "target": "nsis"
    }
  },
```

Then the following to compile the application

### Running the Project

```
Npm run dist
```
![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/vhxn0wp46w73tg0rtucu.png)

Now open the dist folder and you will see an installer my-desktop-app Setup 0.0.0.exe and a win-unpacked folder

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/t79pfvh6tyw0qo28531e.png)

Great, now you have a running desktop application with an MVC structure using angular. Enjoy and Profit. It does create an installer as well, which uses Nullsoft Scriptable Install Script. It is an authoring tool for Microsoft by Nullsoft. It uses zlib license which you can read at 

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/4aquww85unwfs9ee5exa.png)

{% github th3n00bc0d3r/noob-angular-electron %}
