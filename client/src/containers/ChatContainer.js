import React, { Component } from 'react'

export class ChatContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "",
      messages: [],
    }

  
    this.props.socket.on('receive_msg', function(data) {
      addMessage(data)
    })

    const addMessage = data => {
      console.log(data)
      this.setState({
        messages: [...this.state.messages, data]
      })
      console.log(this.state.messages)
    };
  }
  
  handleChange = e => {
    e.preventDefault();
    const msg = e.target.value;
    this.setState({
      message: msg,
    })
  }

  handleSubmit = e => {
    this.props.socket.emit('send_msg', {
      user: this.props.name, 
      message: this.state.message
    });
    
    // // console.log(data)
    // this.setState({
    //   messages: [...this.state.messages, this.state.message]
    // })
    // console.log(this.state.messages)

    // this.addMessage(this.state.message)
    this.setState({
      message: ""
    })
  }

  handleKeyPress = event => {
    const msg = this.state.message;
    if(msg != "" && event.key == 'Enter') {
      this.handleSubmit()
    }
  }

  scrollToBottom = () => {
    const chat = document.getElementById("chatLog");
    chat.scrollTop = chat.scrollHeight;
  }

  // showChatValue = () => {
  //   this.state.messages.map(message => {

  //   })
  // }

  render() {
    return (
      <div>
        <div className="col">
          <div className="row-xl-10">
            {this.state.messages.map(message => {
              return (
                <div>{message.user}: {message.message}</div>
              )
            })}
          </div>
          <hr/>
          <div className="row-xl-2">
            <div className="input-group">
              <input className="form-control" 
                    placeholder="Message..." 
                    name="chat"
                    type="message" 
                    value={this.state.message} 
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress} />
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit" onClick={this.handleSubmit} onSubmit={this.handleSubmit}>
                  <i className="fa fa-send-o"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatContainer
