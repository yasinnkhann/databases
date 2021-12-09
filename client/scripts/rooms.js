// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],
  filteredRooms: [],
  count: 0,

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  renderRooms: function(data) {
    // var rooms = console.log('ROOMS: ', data);
    var roomsArr = data.filter(obj => obj.roomname).map(obj => obj.roomname);
    roomsArr = [...new Set(roomsArr)];


    for (let i = 0; i < roomsArr.length; i++) {
      if (!roomsArr[i].startsWith('<')) {
        if (Rooms.count < roomsArr.length) {
          Rooms.filteredRooms.push(roomsArr[i]);
          Rooms.count += 1;
        }
      }
    }
    count = 0;
    Rooms._data = Rooms.filteredRooms;
  }
};