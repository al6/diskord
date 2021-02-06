# [Live Site](https://diskord.herokuapp.com "Diskord Homepage")

## Diskord

I'm a huge fan of the popular [Discord App](https://discordapp.com). [Diskord](https://diskord.herokuapp.com/) is my take on cloning the real deal. Gamers (or anyone really) can sign up, login, create guilds (with optional guild emblems), create guild channels, and chat (with optionally attached images/gifs) with guild members all in real time.

![Screenshot of splash page](https://diskord-dev.s3.amazonaws.com/Screen+Shot+2020-02-21+at+9.56.49+AM.png "Screenshot of splash page")
![Gif of websockets working](https://media.giphy.com/media/U4pAxmJLqbNqCB1vCP/source.gif "Gif of Websocket live chat working demo")

### Technologies used
Diskord was built using React, Redux, Ruby on Rails, ActionCable, Active Storage, PostgreSQL, and AWS S3

### Features

#### Members
- [x] Can join and create guilds
- [x] Can upload an optional custom guild emblem when creating a guild
- [x] Can create channels
- [x] Can create and send messages
- [x] Can upload an optional custom image file when creating and sending a message
- [x] Can see currently selected guild's members
- [x] Can navigate around guilds and channels by clicking corresponding links
- [x] Can see new channels and messages in real time that another member creates (assuming the member's internet connection does not block port 80 required for this implementation of WebSockets)

# Action Cable Implementation 
I wanted to keep my React presentational component as readable and simple as possible, so I chose to compose a function and pass it down with dispatch to that same presentational component. Code related to implementing action cable is shown below.

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
* Create message_payload to account for @message.image.attached? from Active Storage
```ruby
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

```javascript
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
```

### channel_messages_index.jsx (abridged from original)
* Once messages index is mounted, start initial subscription for new messages
* When messages index is updated (by clicking on a different channel)
  - get new messages
  - destroy the old subscription
  - create a new subscription to the currently selected messages index
  
```javascript
componentDidMount() {
    this.props.fetchMessages(this.props.channelId);
    if (Number.isInteger(this.props.channelId)) {
      this.props.subscribe(this.props.channelId);
    }
  }

componentDidUpdate(previousProps) {
  if (previousProps.channelId !== this.props.channelId) {
    this.props.fetchMessages(this.props.channelId);
    this.props.subscribe(this.props.channelId);
  }
  if (previousProps.messages.length !== this.props.messages.length) {
    this.messagesIndex.current.scrollIntoView();
  }
}
```

