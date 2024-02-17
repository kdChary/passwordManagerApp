import {Component} from 'react'

import './index.css'

class PasswordManager extends Component {
  renderForm = () => {
    const webImgUrl =
      'https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'
    const userImgUrl =
      'https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png'
    const lockImgUrl =
      'https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png'

    return (
      <form onSubmit={this.onSubmitForm} className="details-form">
        <p className="form-title">Add New Password</p>
        <div className="input-card">
          <div className="input-image-card">
            <img src={webImgUrl} alt="website" className="input-image" />
          </div>
          <input
            type="text"
            placeholder="Enter Website"
            className="input"
            onChange={this.onChangeWeb}
            id="web"
          />
        </div>
        <div className="input-card">
          <div className="input-image-card">
            <img src={userImgUrl} alt="username" className="input-image" />
          </div>
          <input
            type="text"
            placeholder="Enter Username"
            className="input"
            onChange={this.onChangeUserName}
            id="username"
          />
        </div>
        <div className="input-card">
          <div className="input-image-card">
            <img src={lockImgUrl} alt="password" className="input-image" />
          </div>
          <input
            type="text"
            placeholder="Enter Password"
            className="input"
            onChange={this.onChangePassword}
            id="password"
          />
        </div>
        <button type="submit" className="form-button">
          Add
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="app-background">
        <div className="password-manager-app">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="password-details">
            <div className="password-manager-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
                className="password-manager-image"
              />
            </div>
            {this.renderForm()}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
