import {Component} from 'react'

import AddPasswords from '../AddPassword'

import './index.css'

class PasswordManager extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="password-manager-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="passwordManager-logo"
          />
          <AddPasswords />
        </div>
      </div>
    )
  }
}

export default PasswordManager
