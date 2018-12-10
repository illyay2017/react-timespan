import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';


class ChatView extends Component {

  render() {
    return (
      <div id="chat">
        {/* <Chatbanner username={this.state.username} /> */}
        <div className="ez">
          <h3>Active users for this room:</h3>

          <ul className="roomUsers">
            {/* {Object.keys(this.state.roomUsers).map((username, index) => {
              return (
                <li
                  key={index}
                  value={username}
                  onClick={this.handleUserNameClick}
                >
                  {username}
                </li>
              );
            })} */}
          </ul>
        </div>

        <div className="messageArea">
          <div className="messages">
            {/* {this.state.messages.map((message, i) => {
              if (message.username === 'SERVER') {
                // console.log('hello');
                return (
                  <p className="message" key={i}>
                    {message.message}
                  </p>
                );
              } else {
                return (
                  <p className="message" key={i}>
                    {message.username}: {message.message}
                  </p>
                );
              }
            })}
            <NotificationArea userTyping={this.state.userTyping} /> */}
          </div>
        </div>
        <input
          type="text"
          placeholder="Message"
          className="message-form"
          // value={this.state.messageToSend}
          // onChange={this.handleMessageTyping}
          // onKeyDown={this.handleMessageSubmit}
        />
        {/* <button id="BAD" onClick={this.handleSendMessageClick}>
          Send Message
        </button> */}
      </div>
    );
  }
}
export default ChatView;