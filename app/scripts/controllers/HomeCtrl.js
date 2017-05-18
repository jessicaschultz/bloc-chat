(function() {
    function HomeCtrl(Room) {
      //$scope.Rooms = rooms;
      this.rooms = Room.all;

      console.log(this.rooms);
      
    }
  
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

/*Direction: Create a controller and associate it with the home template in a $state. Inject the Room service so that you can assign the array of objects retrieved by the all method to a $scope variable. Display the rooms in the template using ng-repeat.

my first thought was use $scope.Rooms = rooms; but keep getting an error that $scope was undefined. is there a way for $scope to work? How do you know when to use $scope vs. this? */