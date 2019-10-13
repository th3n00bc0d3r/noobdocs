## What is Noob Docs?

Noob Docs is a complete Git Poweted Documentation System meaning it is a place where all documentations that have ever seemed make no sense become a documentation that makes sense. It is a repository for simplifying documentations and guides.

### How does it work?

![Noob Doc Concept](https://i.ibb.co/dpsFG2p/concept.jpg)

All tutorials and guides are hosted on a github repo. The website itself is hosted on github pages. Noob Docs uses Markdown as the standard for writing and publishing articles. The articles follow a simple folder based hierarchy, just like in the back of the old times where all were organized in folders. Anyone can can fork the repo and add changes to it which can later be merged into the repo. As soon as the changes are merged, Noob Docs automatically fetches them and makes them avaialble for the web. These tutorials are also available to read by just browsing the repo itself too. 

#### The Directory Structure?

You can find the repo at: [https://github.com/th3n00bc0d3r/noobdocs](https://github.com/th3n00bc0d3r/noobdocs)

```
Guides/ ## Directory for Uploading and Structuing the Guides
Test/ ## This is just a test Directory
docs/ ## The Compiled Script for the Website
.gitignore ## Ignores Folders/Files you do not want to upload
CNAME ## Used for redirecting to Domain Web Address
README.md ## This is the Home Page
```

Now If you look at: [https://github.com/th3n00bc0d3r/noobdocs/tree/master/Guides/Databases/MySQL/Understanding%20Databases%20(Relational)](https://github.com/th3n00bc0d3r/noobdocs/tree/master/Guides/Databases/MySQL/Understanding Databases (Relational))

```
noobdocs/Guides/Databases/MySQL/Understanding Databases (Relational)/

1. Guides is the Main Folder
2. Databases is a Category Folder
3. MySQL is a Sub-Category Folder
4. Understanding Databases (Relational) is the Article Folder
```

#### The Article Directory

[Article](https://i.ibb.co/QdMQtfx/Screenshot-2019-10-13-at-3-08-33-PM.png)

```
links.md - This is the table of contents of your article
readme.md - This is the article itself
```

#### links.md

```
[Introduction](#introduction)
[Features](#features)
[Primary Key](#primarykey) - 1
[Not Null](#notnull)
[Auto Increment](#autoincrement)
[CRUD](#crud)
[Excercise 1](#excercise1)
```

When making links.md, please be sure the #link in this case 1 is all lowercase and without any spaces or the side table of contents will not work on the website

#### readme.md

```
#### Primary Key
It is a feature of a relational database, that sets to a column making sure that whatever value it contains is always unique. If no value is ever tried to insert into it, it will not allow the entry to be made.

#### Not Null
Simple, it has to have a value or do not allow any entry to enter into it. i. e. NN, Not Null, or Null
```

As you can see it is very simple to link headings with the table of contents of your article.