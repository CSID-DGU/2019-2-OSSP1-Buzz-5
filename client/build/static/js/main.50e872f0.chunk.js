(this["webpackJsonpbuzz-webrtc-online-course"]=this["webpackJsonpbuzz-webrtc-online-course"]||[]).push([[0],{121:function(e,t){},124:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(18),c=a.n(i),s=a(12),r=a(13),l=a(15),u=a(14),d=a(16),m=a(24),h=a(27),p=a(34),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"ADD_ROOM"===t.type?Object(p.a)(new Set([].concat(Object(p.a)(e),[t.room]))):e},g=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"SET_AUDIO"===t.type?t.audio:e},f=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"SET_VIDEO"===t.type?t.video:e},b=Object(h.b)({rooms:v,video:f,audio:g}),E=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{rooms:[],video:!0,audio:!0},k=Object(h.c)(b,E);k.subscribe((function(){return localStorage.setItem("reduxState",JSON.stringify(k.getState()))}));var w=k,O=a(8),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={bridge:"",user:""},a.onRemoteHangup=a.onRemoteHangup.bind(Object(O.a)(a)),a.onMessage=a.onMessage.bind(Object(O.a)(a)),a.sendData=a.sendData.bind(Object(O.a)(a)),a.setupDataHandlers=a.setupDataHandlers.bind(Object(O.a)(a)),a.setDescription=a.setDescription.bind(Object(O.a)(a)),a.sendDescription=a.sendDescription.bind(Object(O.a)(a)),a.hangup=a.hangup.bind(Object(O.a)(a)),a.init=a.init.bind(Object(O.a)(a)),a.setDescription=a.setDescription.bind(Object(O.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){window.RTCPeerConnection=window.RTCPeerConnection||window.webkitRTCPeerConnection,this.props.media(this)}},{key:"componentDidMount",value:function(){var e=this;this.props.getUserMedia.then((function(t){return e.localVideo.srcObject=e.localStream=t})),this.props.socket.on("message",this.onMessage),this.props.socket.on("hangup",this.onRemoteHangup)}},{key:"componentWillUnmount",value:function(){this.props.media(null),void 0!==this.localStream&&this.localStream.getVideoTracks()[0].stop(),this.props.socket.emit("leave")}},{key:"onRemoteHangup",value:function(){this.setState({user:"host",bridge:"host-hangup"})}},{key:"onMessage",value:function(e){"offer"===e.type?(this.pc.setRemoteDescription(new RTCSessionDescription(e)),this.pc.createAnswer().then(this.setDescription).then(this.sendDescription).catch(this.handleError)):"answer"===e.type?this.pc.setRemoteDescription(new RTCSessionDescription(e)):"candidate"===e.type&&this.pc.addIceCandidate(new RTCIceCandidate({sdpMLineIndex:e.mlineindex,candidate:e.candidate}))}},{key:"sendData",value:function(e){this.dc.send(JSON.stringify(e))}},{key:"setupDataHandlers",value:function(){var e=this;this.dc.onmessage=function(e){var t=JSON.parse(e.data);console.log("received message over data channel:"+t)},this.dc.onclose=function(){e.remoteStream.getVideoTracks()[0].stop(),console.log("The Data Channel is Closed")}}},{key:"setDescription",value:function(e){this.pc.setLocalDescription(e)}},{key:"sendDescription",value:function(){this.props.socket.send(this.pc.localDescription)}},{key:"hangup",value:function(){this.setState({user:"guest",bridge:"guest-hangup"}),this.pc.close(),this.props.socket.emit("leave")}},{key:"handleError",value:function(e){console.log(e)}},{key:"init",value:function(){var e=this;this.pc=new RTCPeerConnection({iceServers:[{url:"stun:stun.l.google.com:19302"}]}),this.pc.onicecandidate=function(t){console.log(t,"onicecandidate"),t.candidate&&e.props.socket.send({type:"candidate",mlineindex:t.candidate.sdpMLineIndex,candidate:t.candidate.candidate})},this.pc.onaddstream=function(t){console.log("onaddstream",t),e.remoteStream=t.stream,e.remoteVideo.srcObject=e.remoteStream=t.stream,e.setState({bridge:"established"})},this.pc.ondatachannel=function(t){e.dc=t.channel,e.setupDataHandlers(),e.sendData({peerMediaStream:{video:e.localStream.getVideoTracks()[0].enabled}})},this.localStream.getTracks().forEach((function(t){return e.pc.addTrack(t,e.localStream)})),"host"===this.state.user&&this.props.getUserMedia.then((function(){e.dc=e.pc.createDataChannel("chat"),e.setupDataHandlers(),console.log("attachMediaIfReady"),e.pc.createOffer().then(e.setDescription).then(e.sendDescription).catch(e.handleError)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"media-bridge ".concat(this.state.bridge)},o.a.createElement("video",{className:"remote-video",ref:function(t){return e.remoteVideo=t},autoPlay:!0}),o.a.createElement("video",{className:"local-video",ref:function(t){return e.localVideo=t},autoPlay:!0,muted:!0}))}}]),t}(n.Component),j=a(76),S=a(155),N=document.documentElement;document.fullscreenEnabled=document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled,document.exitFullscreen=document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen||document.msExitFullscreen,N.requestFullscreen=N.requestFullscreen||N.webkitRequestFullscreen||N.mozRequestFullScreen||N.msRequestFullScreen;var D=function(){document.fullscreenEnabled&&(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?document.exitFullscreen():N.requestFullscreen())},C=function(e){return o.a.createElement("div",{className:"auth"},o.a.createElement("div",{className:"media-controls"},o.a.createElement(S.a,{className:"call-exit-button",to:"/"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",className:"svg"},o.a.createElement("path",{d:"M30 16.5h-18.26l8.38-8.38-2.12-2.12-12 12 12 12 2.12-2.12-8.38-8.38h18.26v-3z",fill:"white"}))),o.a.createElement("button",{onClick:e.toggleAudio,className:"audio-button-"+e.audio},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",className:"svg"},o.a.createElement("path",{className:"on",d:"M38 22h-3.4c0 1.49-.31 2.87-.87 4.1l2.46 2.46C37.33 26.61 38 24.38 38 22zm-8.03.33c0-.11.03-.22.03-.33V10c0-3.32-2.69-6-6-6s-6 2.68-6 6v.37l11.97 11.96zM8.55 6L6 8.55l12.02 12.02v1.44c0 3.31 2.67 6 5.98 6 .45 0 .88-.06 1.3-.15l3.32 3.32c-1.43.66-3 1.03-4.62 1.03-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V42h4v-6.56c1.81-.27 3.53-.9 5.08-1.81L39.45 42 42 39.46 8.55 6z",fill:"white"}),o.a.createElement("path",{className:"off",d:"M24 28c3.31 0 5.98-2.69 5.98-6L30 10c0-3.32-2.68-6-6-6-3.31 0-6 2.68-6 6v12c0 3.31 2.69 6 6 6zm10.6-6c0 6-5.07 10.2-10.6 10.2-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V42h4v-6.56c6.56-.97 12-6.61 12-13.44h-3.4z",fill:"white"}))),o.a.createElement("button",{onClick:e.toggleVideo,className:"video-button-"+e.video},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",className:"svg"},o.a.createElement("path",{className:"on",d:"M40 8H15.64l8 8H28v4.36l1.13 1.13L36 16v12.36l7.97 7.97L44 36V12c0-2.21-1.79-4-4-4zM4.55 2L2 4.55l4.01 4.01C4.81 9.24 4 10.52 4 12v24c0 2.21 1.79 4 4 4h29.45l4 4L44 41.46 4.55 2zM12 16h1.45L28 30.55V32H12V16z",fill:"white"}),o.a.createElement("path",{className:"off",d:"M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm-4 24l-8-6.4V32H12V16h16v6.4l8-6.4v16z",fill:"white"}))),o.a.createElement("button",{onClick:D,className:"fullscreen-button"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",className:"svg"},o.a.createElement("path",{className:"on",d:"M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z",fill:"white"}),o.a.createElement("path",{className:"off",d:"M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z",fill:"white"}))),o.a.createElement("button",{onClick:e.handleHangup,className:"hangup-button"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",className:"svg"},o.a.createElement("path",{d:"M24 18c-3.21 0-6.3.5-9.2 1.44v6.21c0 .79-.46 1.47-1.12 1.8-1.95.98-3.74 2.23-5.33 3.7-.36.35-.85.57-1.4.57-.55 0-1.05-.22-1.41-.59L.59 26.18c-.37-.37-.59-.87-.59-1.42 0-.55.22-1.05.59-1.42C6.68 17.55 14.93 14 24 14s17.32 3.55 23.41 9.34c.37.36.59.87.59 1.42 0 .55-.22 1.05-.59 1.41l-4.95 4.95c-.36.36-.86.59-1.41.59-.54 0-1.04-.22-1.4-.57-1.59-1.47-3.38-2.72-5.33-3.7-.66-.33-1.12-1.01-1.12-1.8v-6.21C30.3 18.5 27.21 18 24 18z",fill:"white"})))),o.a.createElement("div",{className:"request-access"},o.a.createElement("p",null,o.a.createElement("span",{className:"you-left"},"You hung up.\xa0"),"Send an invitation to join the room."),o.a.createElement("form",{onSubmit:e.send},o.a.createElement("input",{type:"text",autoFocus:!0,onChange:e.handleInput,"data-ref":"message",maxLength:"30",required:!0,placeholder:"Hi, I'm John Doe."}),o.a.createElement("button",{className:"primary-button"},"Send"))),o.a.createElement("div",{className:"grant-access"},o.a.createElement("p",null,"A peer has sent you a message to join the room:"),o.a.createElement("div",null,e.message),o.a.createElement("button",{onClick:e.handleInvitation,"data-ref":"reject",className:"primary-button"},"Reject"),o.a.createElement("button",{onClick:e.handleInvitation,"data-ref":"accept",className:"primary-button"},"Accept")),o.a.createElement("div",{className:"room-occupied"},o.a.createElement("p",null,"Please, try another room!"),o.a.createElement(S.a,{className:"primary-button",to:"/"},"OK")),o.a.createElement("div",{className:"waiting"},o.a.createElement("p",null,o.a.createElement("span",null,"Waiting for someone to join this room:\xa0"),o.a.createElement("a",{href:window.location.href},window.location.href),o.a.createElement("br",null),o.a.createElement("span",{className:"remote-left"},"The remote side hung up."))))},x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={sid:"",message:"",audio:!0,video:!0},a.handleInvitation=a.handleInvitation.bind(Object(O.a)(a)),a.handleHangup=a.handleHangup.bind(Object(O.a)(a)),a.handleInput=a.handleInput.bind(Object(O.a)(a)),a.toggleVideo=a.toggleVideo.bind(Object(O.a)(a)),a.toggleAudio=a.toggleAudio.bind(Object(O.a)(a)),a.send=a.send.bind(Object(O.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"hideAuth",value:function(){this.props.media.setState({bridge:"connecting"})}},{key:"full",value:function(){this.props.media.setState({bridge:"full"})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.socket;console.log("props",this.props),this.setState({video:this.props.video,audio:this.props.audio}),t.on("create",(function(){return e.props.media.setState({user:"host",bridge:"create"})})),t.on("full",this.full),t.on("bridge",(function(t){return e.props.media.init()})),t.on("join",(function(){return e.props.media.setState({user:"guest",bridge:"join"})})),t.on("approve",(function(t){var a=t.message,n=t.sid;e.props.media.setState({bridge:"approve"}),e.setState({message:a,sid:n})})),t.emit("find"),this.props.getUserMedia.then((function(t){e.localStream=t,e.localStream.getVideoTracks()[0].enabled=e.state.video,e.localStream.getAudioTracks()[0].enabled=e.state.audio}))}},{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.dataset.ref,e.target.value))}},{key:"send",value:function(e){e.preventDefault(),this.props.socket.emit("auth",this.state),this.hideAuth()}},{key:"handleInvitation",value:function(e){e.preventDefault(),this.props.socket.emit([e.target.dataset.ref],this.state.sid),this.hideAuth()}},{key:"toggleVideo",value:function(){var e=this.localStream.getVideoTracks()[0].enabled=!this.state.video;this.setState({video:e}),this.props.setVideo(e)}},{key:"toggleAudio",value:function(){var e=this.localStream.getAudioTracks()[0].enabled=!this.state.audio;this.setState({audio:e}),this.props.setAudio(e)}},{key:"handleHangup",value:function(){this.props.media.hangup()}},{key:"render",value:function(){return o.a.createElement(C,Object.assign({},this.state,{toggleVideo:this.toggleVideo,toggleAudio:this.toggleAudio,send:this.send,handleHangup:this.handleHangup,handleInput:this.handleInput,handleInvitation:this.handleInvitation}))}}]),t}(o.a.Component),M=Object(m.a)((function(e){return{video:e.video,audio:e.audio}}),(function(e){return{setVideo:function(e){return w.dispatch({type:"SET_VIDEO",video:e})},setAudio:function(e){return w.dispatch({type:"SET_AUDIO",audio:e})}}}))(x),I=a(77),z=a.n(I),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getUserMedia=navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).catch((function(e){return alert("getUserMedia() error: "+e.name)})),a.socket=z.a.connect(),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.addRoom()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(y,{media:function(t){return e.media=t},socket:this.socket,getUserMedia:this.getUserMedia}),o.a.createElement(M,{socket:this.socket,media:this.media,getUserMedia:this.getUserMedia}))}}]),t}(n.Component),H=(Object(m.a)((function(e){return{rooms:new Set(Object(p.a)(e.rooms))}}),(function(e,t){return{addRoom:function(){return w.dispatch({type:"ADD_ROOM",room:t.match.params.room})}}}))(V),Object(m.a)((function(e){return{rooms:e.rooms}}))((function(e){return o.a.createElement("div",{className:"home_ori"},o.a.createElement("div",null,o.a.createElement("h1",{itemProp:"headline"},"WxW Course Page"),o.a.createElement("p",null,"Please enter a room name."),o.a.createElement("input",{type:"text",name:"room",value:e.roomId,onChange:e.handleChange,pattern:"^\\w+$",maxLength:"10",required:!0,autoFocus:!0,title:"Room name should only contain letters or numbers."}),o.a.createElement(S.a,{className:"primary-button",to:"/r/"+e.roomId},"Join"),o.a.createElement(S.a,{className:"primary-button",to:"/r/"+e.defaultRoomId},"Random"),0!==e.rooms.length&&o.a.createElement("div",null,"Recently used rooms:"),e.rooms.map((function(e){return o.a.createElement(S.a,{key:e,className:"recent-room",to:"/r/"+e},e)}))))})),a(153)),T=a(79),R=a(154),A=a(156),F=a(84),L=(a(124),a(38)),U=a.n(L),P=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(H.a,{bg:"light",variant:"light",expand:"xl",sticky:"top"},o.a.createElement(T.a,{href:"#"},o.a.createElement("img",{src:U.a,width:"150",height:"150",className:"d-inline-block align-top",alt:"WxW logo"})),o.a.createElement(H.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(R.a,{className:"ml-auto"},o.a.createElement(R.a.Link,{className:"Navbar-Font",href:"#"},"Home"),o.a.createElement(R.a.Link,{className:"Navbar-Font",href:"#"},"About"),o.a.createElement(A.a,{className:"Navbar-Font",title:"nav-dropdown"},o.a.createElement(A.a.Item,{href:"#droplink_1"},"Accion1"),o.a.createElement(A.a.Item,{href:"#droplink_2"},"Action2"),o.a.createElement(A.a.Divider,null),o.a.createElement(A.a.Item,{href:"#droplink_3"},"Action3"))),o.a.createElement(F.a,{className:"mr-sm-2",variant:"outline-primary",size:"lg",href:"#",align:"right"},"Login"),o.a.createElement(F.a,{variant:"outline-primary",size:"lg",href:"#"},"Signup")))}}]),t}(n.Component),_=(a(145),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"scrollTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"footer-page"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"upper-part"},o.a.createElement("img",{src:U.a,className:"footer-logo"}),o.a.createElement("div",{className:"row text-regular"},o.a.createElement("div",{className:"menu-item"},o.a.createElement("a",{href:"#"},"About")),o.a.createElement("div",{className:"menu-item"},o.a.createElement("a",{href:"#"},"Login")),o.a.createElement("div",{className:"menu-item"},o.a.createElement("a",{href:"#"},"Signup")))),o.a.createElement("div",{className:"footer-part text-smaller"},"Copyright 2019 (c) Dongguk University, CSE-OSSP-1-Team-Buzz")),o.a.createElement("div",{className:"scrollToTop",onClick:function(){return e.scrollTop()}},o.a.createElement("i",{className:"fa fa-angle-up arrow-up-icon"})))}}]),t}(n.Component)),q=(a(146),a(147),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(P,null),o.a.createElement(_,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(q,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},38:function(e,t,a){e.exports=a.p+"static/media/logo_wxw.554a3f5d.png"},85:function(e,t,a){e.exports=a(148)}},[[85,1,2]]]);
//# sourceMappingURL=main.50e872f0.chunk.js.map