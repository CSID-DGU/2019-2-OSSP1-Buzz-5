import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const EnterRoom = props =>
  <div className="wrapper">
    <div className="form-wrapper">
      <h1>Room Password</h1>
      <p>Please enter a room password.</p>
      <input type="text" name="room" value={ props.roomId } onChange={props.handleChange} pattern="^\w+$" required autoFocus/>
      <Link className="primary-button" to={ '/r/' + props.roomId }>Join</Link>
      {/* <Link className="primary-button" to={ '/r/' + props.defaultRoomId }>Random</Link> */}
      {/* { props.rooms.length !== 0 && <div>Recently used rooms:</div> } */}
      {/* { props.rooms.map(room => <Link key={room} className="recent-room" to={ '/r/' + room }>{ room }</Link>) } */}
    </div>
  </div>;

  // <div className="wrapper">
  //   <div className="form-wrapper">
  //     <h1>Input Room Number</h1>
  //     <form onSubmit={this.handleSubmit} method="post" noValidate>
  //       <div className="name">
  //         <label htmlFor="name">Name</label>
  //         <input
  //           placeholder="Name"
  //           type="name"
  //           name="name"
  //           noValidate
  //           onChange={this.handleChange}
  //         />
  //       </div>
  //     </form>
  //   </div>
  // </div>

EnterRoom.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultRoomId: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
  rooms: PropTypes.array.isRequired
};

const mapStateToProps = store => ({rooms: store.rooms});

export default connect(mapStateToProps)(EnterRoom);