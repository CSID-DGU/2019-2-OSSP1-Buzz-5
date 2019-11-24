import React, { Component } from 'react'

export class ChatContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "",
      chat: [],
    }

  
    // this.props.socket.on('receive_msg', function(data) {
    //   addMessage(data)
    // })

    this.props.socket.on('chat_msg', ({name, msg}) => {
      this.setState({
        chat: [...this.state.chat, {name, msg}]
      });
    });
  }

  componentDidMount = () => {
    this.props.socket.on('chat_msg', ({name, msg}) => {
      this.setState({
        chat: [...this.state.chat, {name, msg}]       // 이부분 문제
      });
    });
    console.log(this.state.chat)
  }
  
  handleChange = e => {
    e.preventDefault();
    const msg = e.target.value;
    this.setState({
      message: msg,
    })
  }

  handleSubmit = e => {
    if(this.state.message == "") {
      return
    }

    console.log(1123123123432)
    this.props.socket.emit('send_msg', {
      name: this.props.name, 
      msg: this.state.message
    }, console.log(12341234));


    console.log(this.props.name, this.state.message)
    console.log(this.state.chat)

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

  renderChat = () => {
    const { chat } = this.state.chat;
    console.log(chat)
    return chat.map(({user, msg}, idx) => (
      <div key={idx}>
        <span style={{color: "green"}}>{user} : </span>
        <span>{msg}</span>
      </div>
    ));
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
            {this.renderChat}
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
                <button className="btn btn-default" 
                        type="submit"
                        onClick={this.handleSubmit} 
                        onSubmit={this.handleSubmit}>
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
