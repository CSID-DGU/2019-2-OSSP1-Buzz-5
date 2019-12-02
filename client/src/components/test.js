<<<<<<< HEAD
import React, { Component } from 'react'
import { render } from 'react-dom'
import './style.css'

class App extends Component {
  constructor() {
    super()
  }
  componentWillMount() {
    this.getData()
  }

  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://localhost:3000/client/src/Server/main')
    // send the request
    xhr.send()
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  }
}
=======
// import React, { Component } from 'react'
// import { render } from 'react-dom'
// import './style.css'

// console.log("test.js");

// class App extends Component {
//   constructor() {
//     super()
//   }
//   componentWillMount() {
//     this.getData()
//   }

//   getData() {
//     // create a new XMLHttpRequest
//     var xhr = new XMLHttpRequest()

//     // get a callback when the server responds
//     xhr.addEventListener('load', () => {
//       // update the state of the component with the result here
//       console.log(xhr.responseText)
//     })
//     // open the request with the verb and the url
//     xhr.open('GET', 'https://localhost:3000/client/src/Server/main')
//     // send the request
//     xhr.send()
//   }

//   render() {
//     return (
//       <div>
//         <p>Hello World</p>
//       </div>
//     )
//   }
// }
>>>>>>> f4b3f4e8403b889d42305847eab18213bbfbf5b8
