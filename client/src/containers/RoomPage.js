import React, { Component } from 'react';
import MediaContainer from './MediaContainer'
import CommunicationContainer from './CommunicationContainer'
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
            <div className="col">
              <div className="row-xl-10">
                asdfasdf
              </div>
              <hr/>
              <div className="row-xl-2">
                <div className="input-group">
                  <input className="form-control" placeholder="Search" name="srch-term" id="srch-term"></input>
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <i className="fa fa-send-o"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
