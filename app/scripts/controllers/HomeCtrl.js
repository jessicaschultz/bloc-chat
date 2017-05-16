(function() {
    function HomeCtrl(Room) {
        $scope.rooms = rooms;
    }
  
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','$scope', HomeCtrl]);
})();