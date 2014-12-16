angular-lightify
==============

A lightweight AngularJS factory for Bootstrap notify

Dependencies
==============

_You can find all required libraries in the bower.json configuration file under the demo directory_

AngularJS

https://angularjs.org/


Bootstrap

http://getbootstrap.com/


bootstrap-notify

https://github.com/goodybag/bootstrap-notify


Usage
==============

```
<script src="angular-lightify.js"></script>
```

Create for example a div element with attribute or a nrz-flash-messages element in the body.

```
<div nrz-flash-messages position="top-right"></div>
```

Avaliable positions:

| Position      | Class Name (can be providing by the "position" attribute) | Description |
| ------------- | ------------- | ------------- |
| Top Left | top-left | Notifications will appear fixed in the top-left corner |
| Top Right | top-right | Notifications will appear fixed in the top-right corner |
| Bottom Left | bottom-left | Notifications will appear fixed in the bottom-left corner |
| Bottom Right | bottom-right | Notifications will appear fixed in the bottom-right corner |

Inject "nrzLightify" to your controller or other methods.

You can use it like below in order to show notifications:
```
nrzLightify({
   type: 'warning',
   text: 'A notification!'
});
```
or for flash notifications:
```
nrzLightify.flash({
   type: 'warning',
   text: 'A flash notification!'
});
```
Flash notifications which you created with above "flash" method will be shown on $routeChangeSuccess event if you used ngRoute and $stateChangeSuccess event if you used uiRouter plugins. You can find an example about the usage of that in the demo section.

All available types:
```
'info'
'success'
'warning'
'danger'
```
You can give custom delay time for notification bars like below as miliseconds:
```
// Disappears after 10 seconds.
nrzLightify({
   type: 'warning',
   text: 'A notification!'
}, 10000);
```

Demo
==============
<p data-height="515" data-theme-id="10341" data-slug-hash="ByNmEP" data-default-tab="result" data-user="nerezo" class='codepen'>See the Pen <a href='http://codepen.io/nerezo/pen/ByNmEP/'>Angular-Lightify-Demo</a> by <a href='http://codepen.io/nerezo'>@nerezo</a> on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


# License

The MIT License

Copyright (c) 2014 Okan Özeren

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
