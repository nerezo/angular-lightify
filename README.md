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

Create for example a div element with attribute or a flash-messages element in the body.

```
<div flash:messages class="notifications top-right"></div>
```

Avaliable positions:

| Position      | Class Name    | Description   |
| ------------- | ------------- | ------------- |
| Top Left | top-left | Notifications will appear fixed in the top-left corner |
| Top Right | top-right | Notifications will appear fixed in the top-right corner |
| Bottom Left | bottom-left | Notifications will appear fixed in the bottom-left corner |
| Bottom Right | bottom-right | Notifications will appear fixed in the bottom-right corner |

Sample "notifications" class:
```
/* Notification bar */
.notifications.top-right {
   right: 20px;
   top: 60px;
}
.notifications {
   position: fixed;
   z-index: 9999;
}
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
