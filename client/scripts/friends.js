// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: new Set(),
  userNameClick: function() {
    $('.username').on('click', function(e) {
      Friends.toggleStatus(e.currentTarget.innerText);
      console.log(Friends._data);
    });
  },

  isFriend: function(friend) {
    return Friends._data.has(friend);
  },

  toggleStatus: function(friend) {
    if (friend === 'anonymous') {
      return;
    }
    if (Friends.isFriend(friend)) {
      Friends._data.delete(friend);
    } else {
      Friends._data.add(friend);
    }
  }
  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
};