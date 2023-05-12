// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="Page">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank You!Happy Learning</p>
        {isSubscribe && (
          <button type="button" className="but">
            Subscribe
          </button>
        )}
        {!isSubscribe && (
          <button type="button" className="but">
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
