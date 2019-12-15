import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const EnterRoom = props =>
  <div className="wrapper">
    <div className="form-wrapper">
      <h1>Room ID</h1>
      <p>Please enter a room ID.</p>
      <input type="password" placeholder="input ID" name="room" value={ props.roomId } onChange={props.handleChange} pattern="^\w+$" required autoFocus/>
      <Link className="primary-button" to={ '/r/' + props.roomId }>Join</Link>
    </div>
  </div>;

EnterRoom.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultRoomId: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
  rooms: PropTypes.array.isRequired
};

const mapStateToProps = store => ({rooms: store.rooms});

export default connect(mapStateToProps)(EnterRoom);