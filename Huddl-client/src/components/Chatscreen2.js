import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit-client'
import MessageList from '../pages/MessagesList'
import SendMessageForm from '../pages/SendMessageForm'
import TypingIndicator from '../pages/TypingIndicator'
import WhosOnlineList from '../pages/WhosOnlineList'

import store from '../redux/store';

class ChatScreen2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {},
     currentRoom: {},
     messages: [],
     usersWhoAreTyping: [],
     chatManager: new Chatkit.ChatManager({
        instanceLocator: 'v1:us1:3366eda2-e4d8-45c1-9f80-00f24eb6f202',
        userId: store.getState().user.credentials.email,
        tokenProvider: new Chatkit.TokenProvider({
          url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3366eda2-e4d8-45c1-9f80-00f24eb6f202/token',
        }),
      }),
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

//   componentDidUpdate () {
//     const chatManager = new Chatkit.ChatManager({
//         instanceLocator: 'v1:us1:3366eda2-e4d8-45c1-9f80-00f24eb6f202',
//         userId: this.props.currentusername,
//         tokenProvider: new Chatkit.TokenProvider({
//           url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3366eda2-e4d8-45c1-9f80-00f24eb6f202/token',
//         }),
//       })
  
//       chatManager
//         .connect()
//         .then(currentUser => {
//           this.setState({ currentUser })
//           return currentUser.subscribeToRoom({
//             roomId: this.props.currentroomid, //"4e92e294-0274-4d0a-928a-7fbb2b2b0e04"
//             messageLimit: 100,
//             hooks: {
//               onMessage: message => {
//                 this.setState({
//                   messages: [...this.state.messages, message],
//                 })
//               },
//               onUserStartedTyping: user => {
//                 this.setState({
//                   usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name],
//                })
//               },
//               onUserStoppedTyping: user => {
//                 this.setState({
//                   usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
//                     username => username !== user.name
//                   ),
//                 })
//               },
//               onPresenceChange: () => this.forceUpdate(),
//             },
//           })
//         })
//         .then(currentRoom => {
//           this.setState({ currentRoom })
//          })
//         .catch(error => console.error('error', error))
//   }

componentWillReceiveProps(props) {
    const roomnum = this.props.currentroomid;
    if(roomnum !== props.currentroomid) {
    this.render();
    }
}

componentDidMount () {
    // const chatManager = new Chatkit.ChatManager({
    //   instanceLocator: 'v1:us1:3366eda2-e4d8-45c1-9f80-00f24eb6f202',
    //   userId: this.props.currentusername,
    //   tokenProvider: new Chatkit.TokenProvider({
    //     url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3366eda2-e4d8-45c1-9f80-00f24eb6f202/token',
    //   }),
    // })

    this.state.chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser })
        return currentUser.subscribeToRoom({
          roomId: this.props.currentRoomId, //"4e92e294-0274-4d0a-928a-7fbb2b2b0e04"
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
       })
      .catch(error => console.error('error', error))
  }

  render() {
    const styles = {
       container: {
         overflowY: 'scroll',
         flex: 1,
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
       message: { fontSize: 15 },
     }
    return (
      <div style={styles.container}>
        <div style={styles.chatContainer}>
          <aside style={styles.whosOnlineListContainer}>
            <WhosOnlineList
                currentUser={this.state.currentUser}
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

export default ChatScreen2;