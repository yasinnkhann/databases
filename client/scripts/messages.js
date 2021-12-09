// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],
  curKey: 0,
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  update: function(messages) {

    if (Messages._data.length === 0 || Messages.curKey !== messages[0].message_id) {

      Messages.curKey = messages[0].message_id;
      Messages._data = [];
      MessagesView.$chats.empty();

      messages.forEach(msg => {

        Messages._data.push({
          username: msg.username,
          text: msg.text,
          roomname: msg.roomname,
          updatedAt: msg.updated_at,
          id: msg.message_id
        });
      });
      MessagesView.render();
    }


  }
};