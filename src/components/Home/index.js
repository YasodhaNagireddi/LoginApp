// Write your code here

import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  changeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let messageEle
    let buttonEle

    if (isLogin) {
      messageEle = <Message content="Welcome User" />
      buttonEle = <Login changeStatus={this.changeStatus} />
    } else {
      messageEle = <Message content="Please Login" />
      buttonEle = <Logout changeStatus={this.changeStatus} />
    }

    return (
      <div className="login-bg">
        <div className="login-card">
          {messageEle}
          {buttonEle}
        </div>
      </div>
    )
  }
}

export default Home
