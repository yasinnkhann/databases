// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.


var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //let messages = Messages._data;
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //how to render a message
    // MessageView.render()
    let $message = MessageView.render(message);
    MessagesView.$chats.append($message);
  },

  render: function() {
    let messages = Messages._data;
    // TODO: Render _all_ the messages.
    // call renderMessage on each message
    messages.forEach(msg => {
      if (msg.text) {
        MessagesView.renderMessage(msg);
      }
    });
    Friends.userNameClick();
  },


  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};