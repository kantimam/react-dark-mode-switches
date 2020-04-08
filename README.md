# react-dark-mode-switch

> fancy checkbox to do whatever but styles as dark mode switch

[![NPM](https://img.shields.io/npm/v/react-dark-mode-switch.svg)](https://www.npmjs.com/package/react-dark-mode-switch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-dark-mode-switch
```

## Usage

```tsx
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
          /* required */
          toggleChecked={this.toggleChecked}
          isChecked={this.state.darkMode} 
          /* optional working default values are provided */
          darkLabel="dark" 
          lightLabel="light" 
          activeClass="darkActive"
          id="darkModeToggle" 
        />
      </div>
    )
  }
}
```

## License

MIT © [https://github.com/kantimam](https://github.com/https://github.com/kantimam)
