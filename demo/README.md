angular-lightify Demo application
==============

You have to install npm development dependencies first:

```
~/Projects/angular-lightify/demo$]$ npm install
...
```

After that install bower dependencies of the demo application:

```
~/Projects/angular-lightify/demo$]$ bower install
...
```

Used nws module of npm to be able to serve the demo application. You can easily start a web server which serves current directory with the "lightify-demo" base path like below:

```
~/Projects/angular-lightify/demo$]$ node node_modules/nws/bin/nws -v -o -p 8082 -d . -b lightify-demo
```
