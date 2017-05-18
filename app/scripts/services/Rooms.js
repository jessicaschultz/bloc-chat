(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
      
        Room.all = rooms;
      
        return Room;
      
      console.log(Room);
    }
  
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();

/* How could I test to see what the value of above? I tried console.log, and calling Room(), etc. in the console and couldn't get anything to show up.

'rooms'/ 'Room' issue...Do i have to keep 'rooms' or 'Room' name because of how i have it in Firebase Database?
*/
