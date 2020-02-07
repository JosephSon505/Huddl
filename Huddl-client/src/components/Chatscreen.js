import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit-client'
import MessageList from '../pages/MessagesList'
import SendMessageForm from '../pages/SendMessageForm'
import TypingIndicator from '../pages/TypingIndicator'
import WhosOnlineList from '../pages/WhosOnlineList'

class ChatScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {},
     currentRoom: {},
     messages: [],
     usersWhoAreTyping: [],
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.sendTypingEvent = this.sendTypingEvent.bind(this)
  }
  sendTypingEvent() {
   this.state.currentUser
     .isTypingIn({ roomId: this.state.currentRoom.id })
     .catch(error => console.error('error', error))
  }

  sendMessage(text) {
   this.state.currentUser.sendMessage({
     text,
     roomId: this.state.currentRoom.id,
   })
  }

  componentDidMount () {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:3366eda2-e4d8-45c1-9f80-00f24eb6f202',
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3366eda2-e4d8-45c1-9f80-00f24eb6f202/token',
      }),
    })

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser })
        return currentUser.subscribeToRoom({
          roomId: "c5a18273-2a23-4cc3-b01e-6ff1d9ccd87a",
          messageLimit: 100,
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message],
              })
            },
            onUserStartedTyping: user => {
              this.setState({
                usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name],
             })
            },
            onUserStoppedTyping: user => {
              this.setState({
                usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                  username => username !== user.name
                ),
              })
            },
            onPresenceChange: () => this.forceUpdate(),
          },
        })
      })
      .then(currentRoom => {
        this.setState({ currentRoom })
        console.log(currentRoom);
       })
      .catch(error => console.error('error', error))
  }

  render() {
    const styles = {
       container: {
         overflowY: 'scroll',
         flex: 1,
         postion: 'absolute',
         top: '500px',
         left: '50%',
       },
       ul: {
         listStyle: 'none',
       },
       li: {
         marginTop: 13,
         marginBottom: 13,
       },
       senderUsername: {
         fontWeight: 'bold',
       },
       message: { fontSize: 200 },
     }
    return (
      <div style={styles.container}>
        <div style={styles.chatContainer}>
          <aside style={styles.whosOnlineListContainer}>
            <WhosOnlineList
                currentUser={this.state.currentUser.name}
                users={this.state.currentRoom.users}
            />
          </aside>
          <section style={styles.chatListContainer}>
            <MessageList
              messages={this.state.messages}
              style={styles.chatList}
            />
            <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
            <SendMessageForm 
              onSubmit={this.sendMessage} 
              onChange={this.sendTypingEvent}
            />
          </section>
        </div>
      </div>
    )
  }
}

export default ChatScreen