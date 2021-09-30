import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log('yeah, we are live')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    alert(data);
    // console.log(data.foo)
    $('#msg').append(data.foo);
    // $('#message-content').append(data.content) 
    // Called when there's incoming data on the websocket for this channel
  }
});
