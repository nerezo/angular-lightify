  angular.module('nrzLightify', [])

  .factory('nrzLightify', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
    var messages = [];

    var reset;
    // Cleans all available shown messages
    var cleanup = function () {
      $timeout.cancel(reset);
      reset = $timeout(function () {
        messages = [];
      });
    };

    // Trigger the the flash:message event
    var emit = function () {
      $rootScope.$emit('flash:message', messages, nrzLightify, cleanup);
    };

    // Below events trigger on $stateChangeSuccess event with uiRouter and $routeChangeSuccess event with ngRoute
    $rootScope.$on('$routeChangeSuccess', emit);
    $rootScope.$on('$stateChangeSuccess', emit);

    var nrzLightify = function (message, timeout) {
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
        default:
          message.text = message.text;
          message.fadeOut = { enabled: true, delay: (timeout === undefined ? 10000 : timeout) };
          break;
      }

      nrzLightify.nrzLightifyContainer.notify({
        message: { html: '<span>' + message.text + '</span>', text: false },
        type: message.type,
        fadeOut: message.fadeOut
      }).show();
    };

    // The container variable initializes.
    nrzLightify.nrzLightifyContainer = {};

    // The flash stack updater method.
    nrzLightify.flash = function (message, timeout) {
      messages.push({ message: message, timeout: timeout });
    };

    return nrzLightify;
  }])

  .directive('nrzLightifyMessages', function (nrzLightify) {
    return {
      restrict: 'EA',
      replace: true,
      scope: false,
      controller: function ($scope, $rootScope) {
        $rootScope.$on('flash:message', function (_, messages, nrzLightify, done) {
          // Uses all stacked messages for showing the notification bands.
          angular.forEach(messages, function (message, index) {
            nrzLightify(message.message, message.timeout);
          });

          done();
        });
      },
      link: function (scope, element, attrs) {
        // Default and user selected css class are adding to the element.
        element.addClass('notifications').addClass(attrs.position);

        // Keeping the element to be using within the methods of the factory.
        nrzLightify.nrzLightifyContainer = element;
      }
    };
  });
