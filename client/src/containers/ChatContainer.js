import React, { Component } from 'react'
import "../components/css/Room.scss"

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
      log.push(obj)
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
      timestamp: this.getTimeStamp()
    });

    this.setState({
      message: ""
    })
  }

  getTimeStamp = () => {
    var date = new Date()
    var formatedDate = 
      // this.changeFormat(date.getFullYear(), 4) + '-' +
      // this.changeFormat(date.getMonth() + 1, 2) + '-' +
      // this.changeFormat(date.getDate(), 2) + ' ' +
  
      this.changeFormat(date.getHours(), 2) + ':' +
      this.changeFormat(date.getMinutes(), 2) + ':' +
      this.changeFormat(date.getSeconds(), 2);
  
    return formatedDate;
  }

   changeFormat = (n, digits) => {
    var zero = '';
    var i;
    n = n.toString();

    if (n.length < digits) {
      for (i=0; i<digits-n.length; i++)
        zero += '0';
    }
    return zero + n;
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
    this.state.messages.map(e => {
      if(e.name == window.sessionStorage.getItem('name')) {
        return (
          <div key={e.key} className="d-flex flex-row-reverse">
            {/* <span className="badge badge-pill badge-primary">{e.name}</span> */}
            <span className="chat_message">{e.msg}</span>
            <span className="chat_timestamp">{e.timestamp}</span>
          </div>
        );
      } else {
        return (
          <div key={e.key} className="d-flex flex-row">
            <span className="badge badge-pill badge-primary">{e.name}</span>
            <span className="chat_message">{e.msg}</span>
            <span className="chat_timestamp">{e.timestamp}</span>
          </div>
        );
      }
    })
  }

  render() {
    // var messages;
    // if(this.props.name == window.sessionStorage.getItem('name')) {
    //    messages = this.state.messages.map(e => (
    //     <div key={e.key} className="d-flex flex-row-reverse">
    //       {/* <span className="badge badge-pill badge-primary">{e.name}</span> */}
    //       <span className="chat_message">{e.msg}</span>
    //       <span className="chat_timestamp">{e.timestamp}</span>
    //     </div>
    //   ))
    // } else {
    //   messages = this.state.messages.map(e => (
    //     <div key={e.key} className="d-flex flex-row">
    //       <span className="badge badge-pill badge-primary">{e.name}</span>
    //       <span className="chat_message">{e.msg}</span>
    //       <span className="chat_timestamp">{e.timestamp}</span>
    //     </div>
    //   ))
    // }

    return (
      <div>
        <div className="col">
          <div className="row-xl-10">
            <div className="chatLog">
              {this.renderChat}
            </div>
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
