This README is a work in progress
[Live Site](http://www.diskord.io "Diskord Homepage")

# Diskord

I'm a huge fan of the popular [Discord App](https://discordapp.com). [Diskord](http://diskord.io) is my take on cloning the real deal. Gamers (or anyone realy) can sign up, login, upload images, create guilds, create guild channels, and chat with guild members all in real time.

![Screenshot of Diskord](https://diskord-dev.s3.amazonaws.com/Screen+Shot+2020-02-21+at+9.56.49+AM.png)
![GIF of chat updating in real time for two separate users](https://diskord-pro.s3.amazonaws.com/websocket.gif)```

## Technologies used
Diskord was built using React, Redux, Ruby on Rails, ActionCable, Active Storage, PostgreSQL, and AWS S3

## Features

### Members
* Can join and create guilds
* Can upload an optional custom guild emblem when creating a guild
* Can create channels
* Can create and send messages
* Can upload an optional custom image file when creating and sending a message
* Can see currently selected guild's members
* Can navigate around guilds and channels by clicking corresponding links
* Can see new channels and messages in real time that another member creates (assuming the member's internet connection does not block port 80 required for this implementation of WebSockets)

# Action Cable Implementation (container component dependency injection approach)
### chat_channel.rb
* Helper methods to send data, and subscribe to a specific channel from messages controller
```ruby
class ChatChannel < ApplicationCable::Channel
  def self.send_data(channel_name, data)
    ActionCable.server.broadcast(channel_name, data)
  end

  def subscribed
    stream_from specific_channel
  end

  private
  def specific_channel
    "chat_#{params[:channelId]}"
  end
end
```

### messages_controller.rb (abridged from original)
* After creating a message, broadcast to the right subscribers
* Create message_payload to account for @message.image.attached?
```
class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      ChatChannel.send_data("chat_#{@message.channel_id}", message_payload.as_json)
      render :show
    end
  end
end
```

### channel_messages_index_container.js (abridged from original)
* Close over subscription keyword for later reference inside presentational component 
* Unsubscribe if subscription exists
* Close over dispatch for use in subscribe function passed into presentational component

```
import { connect } from "react-redux";
import ChannelMessagesIndex from "./channel_messages_index";
import { receiveMessage } from "../../actions/message_actions";

let subscription
function subscribeToChannel(channelId, dispatch) {
  if (subscription) {
    subscription = subscription.unsubscribe();
  }
  subscription = App.cable.subscriptions.create(
    { channel: "ChatChannel", channelId: channelId },
    {
      received: data => {
        dispatch(receiveMessage(data));
      }
    }
  );
}

const mapDispatchToProps = dispatch => {
  const subscribe = channelId => subscribeToChannel(channelId, dispatch);
  return {
    subscribe,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelMessagesIndex);
```
