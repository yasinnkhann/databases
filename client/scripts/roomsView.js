// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  activeRooms: [],
  //count: 0,

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(rooms) {
    // TODO: Render out the list of rooms.
    // iterate through uniqueRoomsArr
    // append <option value="elem">elem</option> to $select
    // (make sure it doesnt append the same roomname)
    for (let room of rooms) {
      if (!RoomsView.activeRooms.includes(room)) {
        RoomsView.activeRooms.push(room);
        RoomsView.renderRoom(room);
      }
    }

  },

  renderRoom: function(roomname) {
    RoomsView.$select.append(`<option value="${roomname}">${roomname}</option>`);
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    RoomsView.$button.on('click', function(e) {
      e.preventDefault();
      let room = prompt('Please enter a room name:');
      Rooms._data.push(room);
      RoomsView.render(Rooms._data)
      RoomsView.$select.val(room);
    })
  }

};