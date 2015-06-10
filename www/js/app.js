// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', ['$scope', '$ionicModal', '$ionicSlideBoxDelegate', function ($scope, $ionicModal, $ionicSlideBoxDelegate) {
    
    $scope.aImages = 
    [
      {
        'src' : './img/00.jpg', 
        'msg' : ''
      }, {
        'src' : './img/01.jpg', 
        'msg' : ''
      }, 
      {
        'src' : './img/02.jpg', 
        'msg' : ''
      }, {
        'src' : './img/03.jpg', 
        'msg' : ''
      }, 
      {
        'src' : './img/04.jpg', 
        'msg' : ''
      }, {
        'src' : './img/05.jpg', 
        'msg' : ''
      }, 
      {
        'src' : './img/06.jpg', 
        'msg' : ''
      }, {
        'src' : './img/07.jpg', 
        'msg' : ''
      }, 

      {
        'src' : './img/08.jpg', 
        'msg' : ''
      },  
    ];
  
    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $ionicSlideBoxDelegate.slide(0);
      $scope.modal.show();
      screen.unlockOrientation();
      screen.lockOrientation('landscape');
      

    };

    $scope.closeModal = function() {
      $scope.modal.hide();
      screen.unlockOrientation();
      screen.lockOrientation('portrait');
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
      
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
      
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      //console.log('Modal is shown!');
    });

    // Call this functions if you need to manually control the slides
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
  
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };
  
    $scope.goToSlide = function(index) {
      $scope.modal.show();
      $ionicSlideBoxDelegate.slide(index);
    }
  
    // Called each time the slide changes
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
  }
]);