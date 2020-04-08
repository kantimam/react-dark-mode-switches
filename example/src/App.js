import React, { Component } from 'react'
import DarkModeToggle from 'react-dark-mode-switch'
const darkModeClass="darkMode"

export default class App extends Component {
    state = {
    darkMode: false
  }

  toggleChecked = (event) => {
    this.setState({ darkMode: event.target.checked });
  }
  render() {
    return (
      <div className={`App ${this.state.darkMode? darkModeClass: ""}`}>
        DARK MODE TEST
        <DarkModeToggle
          toggleChecked={this.toggleChecked}
          isChecked={this.state.darkMode} 
          darkLabel="dark" 
          lightLabel="light" 
          activeClass="darkActive"
          id="darkModeToggle" 
        />
      </div>
    )
  }
}
