import React, { Component } from 'react';
import MediaContainer from './MediaContainer'
import CommunicationContainer from './CommunicationContainer'
import ChatContainer from './ChatContainer'
import { connect } from 'react-redux'
import store from '../store'
import io from 'socket.io-client'
import '../components/css/Room.scss'

class RoomPage extends Component {
  constructor(props) {
    super(props);
    this.getUserMedia = navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    }).catch(e => alert('getUserMedia() error: ' + e.name))
    this.socket = io.connect();
  }
  componentDidMount() {
    this.props.addRoom();
  }
  render(){
    return (
      <div className="wrap">
        <div className="row">
          <div className="col-xl-9">
            <MediaContainer media={media => this.media = media} socket={this.socket} getUserMedia={this.getUserMedia} />
            <CommunicationContainer socket={this.socket} media={this.media} getUserMedia={this.getUserMedia} />
          </div>
          <hr/>
          <div className="col-xl-3">
            <ChatContainer socket={this.socket} name={this.props.userName}/>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => ({rooms: new Set([...store.rooms])});
const mapDispatchToProps = (dispatch, ownProps) => (
    {
      addRoom: () => store.dispatch({ type: 'ADD_ROOM', room: ownProps.match.params.room })
    }
  );
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
