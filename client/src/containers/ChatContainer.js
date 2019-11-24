import React, { Component } from 'react'

export class ChatContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "",
      messages: [],
    }
  }

  componentDidMount = () => {
    this.props.socket.on('chat',  (obj) => {
      const log = this.state.messages
      obj.key = 'key_' + (this.state.messages.length + 1)
      console.log(obj)
      log.unshift(obj)
      this.setState({messages: log})
    })
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

    this.props.socket.emit('chat', {
      name: this.props.name, 
      msg: this.state.message,
      timestamp: new Date().toISOString()
    });

    console.log(this.props.name, this.state.message, new Date().toISOString())

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
    const { chat } = this.state.messages;
    console.log(chat)
    return chat.map(({user, msg}, idx) => (
      <div key={idx}>
        <span style={{color: "green"}}>{user} : </span>
        <span>{msg}</span>
      </div>
    ));
  }

  render() {
    const messages = this.state.messages.map(e => (
      <div key={e.key}>
        <span>{e.name}</span>
        <span>{e.msg}</span>
        <span>{e.timestamp}</span>
      </div>
    ))
    return (
      <div>
        <div className="col">
          <div className="row-xl-10">
            {messages}
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
