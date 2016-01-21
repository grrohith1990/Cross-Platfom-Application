angular.module('starter.controllers', ['ngCordova','720kb.socialshare'])


.controller('LoadingCtrl',function($state, $timeout){
    $timeout(function () {
        $state.go('landing');
    }, 5000);
})

.controller('LandingCtrl',function($state, $scope){
    $scope.showMenu = function(){
        $state.go('menu');
    };
})
.controller('ShareCtrl',function($state, $scope, $cordovaSocialSharing,$ionicPlatform){

    $scope.gotoMenu = function(){
        $state.go('menu');
    };

    $scope.shareToFacebook = function(){
        $ionicPlatform.ready(function() {
            $cordovaSocialSharing
                .shareViaFacebook('message', 'http://www.google.de')
                .then(function(result) {
                    console.log(result);
                }, function(err) {
                    console.log(err);
                });
          });
    };
    
     $scope.likeCourseFacebook = function() {
        // desktop and mobil use different function to share
        $cordovaSocialSharing
            .shareViaFacebook("message",'http://www.google.de')
            .then(function(result) {
                $ionicPopup.alert({
                  template: 'Thank you for sharing'
                });
            }, function(err) {
                $ionicPopup.alert({
                  template: 'We are so sorry,but something come wrong...'
                });
            });
    };
    
    $scope.likeCourseTwitter = function() {
        // desktop and mobil use different function to share
        $cordovaSocialSharing
            .shareViaTwitter("message",'http://www.google.de')
            .then(function(result) {
                $ionicPopup.alert({
                  template: 'Thank you for sharing'
                });
            }, function(err) {
                $ionicPopup.alert({
                  template: 'We are so sorry,but something come wrong...'
                });
            });
    };      
    
    

    $scope.shareToTwitter = function(){
        $ionicPlatform.ready(function() {
            $cordovaSocialSharing
                .shareViaTwitter('message', 'http://www.google.de')
                .then(function(result) {
                  console.log(result);
                }, function(err) {
                  console.log(err);
                });
          });
    };
})
.controller('MyTriangleProfileCtrl',function($state, $scope){
    $scope.gotoMenu = function(){
        $state.go('menu');
    };
})
.controller('ViewProfilesCtrl',function($state, $scope){
    $scope.gotoProfilesCategory = function(){
        $state.go('profilesCategory');
    };
     $scope.gotoMenu = function(){
        $state.go('menu');
    };
})
.controller('ProfilesCategoryCtrl',function($state, $scope){
    $scope.gotoMenu = function(){
        $state.go('menu');
    };
    $scope.gotoMyTriangleProfile = function(){
        $state.go('myTriangleProfile');
    };
    $scope.gotoViewProfiles = function(){
        $state.go('viewProfiles');
    };
    
    $scope.gotoProfilesCategory = function(){
        $state.go('profilesCategory');
    };
})

.controller('MenuCtrl',function($state, $scope){
    $scope.closeMenu = function(){
        $state.go('landing');
    };
    $scope.gotoMyTriangleProfile = function(){
        $state.go('myTriangleProfile');
    };
    $scope.gotoShare = function(){
        $state.go('share');
    };
    $scope.gotoProfilesCategory = function(){
        $state.go('profilesCategory');
    };
    $scope.gotoViewProfiles = function(){
        $state.go('viewProfiles');
    };
    
})
