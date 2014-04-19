angular-notify
==============

AngularJS factory for Bootstrap notify

Dependencies
==============

Bootstrap

http://getbootstrap.com/


bootstrap-notify

https://github.com/goodybag/bootstrap-notify


Usage
==============

```
<script src="./angular-notify.js"></script>
```

Inject "notification" to your controller or other methods.

You can use it like below in order to show notifications:
```
notification({
   type: 'warning',
   text: 'A notification!'
});
```
or for flash notifications:
```
notification.flash({
   type: 'warning',
   text: 'A flash notification!'
});
```
All available types:
```
'info'
'success'
'warning'
'danger'
```
You can give custom delay time for notify bars like below as miliseconds:
```
// Disappears after 10 seconds.
notification({
   type: 'warning',
   text: 'A notification!'
}, 10000);
```
