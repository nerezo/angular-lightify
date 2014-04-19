angular.module('notification', [])
.factory('notification', ['$rootScope', '$timeout', function($rootScope, $timeout) {
   var messages = [];

   var reset;

   var cleanup = function() {
      $timeout.cancel(reset);
      reset = $timeout(function() {
         messages = [];
      });
   };

   var emit = function() {
      $rootScope.$emit('flash:message', messages, notification, cleanup);
   };

   $rootScope.$on('$routeChangeSuccess', emit);

   var notification = function(message, timeout) {
      switch (message.type) {
         case 'info':
            message.text = '<strong>Info:</strong>&nbsp;' + message.text;
            message.fadeOut = { enabled: true, delay: (timeout === undefined ? 7000 : timeout) };
            break;
         case 'success':
            message.text = '<strong>Success:</strong>&nbsp;' + message.text;
            message.fadeOut = { enabled: true, delay: (timeout === undefined ? 7000 : timeout) };
            break;
         case 'warning':
            message.text = '<strong>Warning:</strong>&nbsp;' + message.text;
            message.fadeOut = { enabled: true, delay: (timeout === undefined ? 10000 : timeout) };
            break;
         case 'danger':
            message.text = '<strong>Important:</strong>&nbsp;' + message.text;
            message.fadeOut = { enabled: true, delay: (timeout === undefined ? 10000 : timeout) };
            break;
      }

      $('.top-right').notify({
         message: { html: '<span style="margin-right: 20px">' + message.text + '</span>', text: false },
         type: message.type,
         fadeOut: message.fadeOut
      }).show();
   };

   notification.flash = function(message, timeout) {
      messages.push({ message: message, timeout: timeout });
   };

   return notification;
}])
.directive('flashMessages', [function() {
   var directive = {restrict: 'EA', replace: true};

   directive.controller = ['$scope', '$rootScope', function($scope, $rootScope) {
      $rootScope.$on('flash:message', function(_, messages, notification, done) {
         $scope.messages = messages;

         angular.forEach(messages, function(message, index){
            notification (message.message, message.timeout);
         });

         done();
      });
   }];

   return directive;
}]);
