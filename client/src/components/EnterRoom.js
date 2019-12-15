import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const EnterRoom = props =>
  <div className="wrapper">
    <div className="form-wrapper">
      <h1>Room ID</h1>
      <input type="password" placeholder="input ID" name="room" onChange={props.handleChange} pattern="^\w+$" required autoFocus/>
      <Link className="primary-button" to={ '/r/' + props.roomId }>Join</Link>
      <Link className="primary-button" to={ '/courselist' }>Cancel</Link>
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