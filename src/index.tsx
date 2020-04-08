/**
 * @class DarkToggle
 */

import * as React from 'react'

import './styles.css'

export type Props = {
  id?: string,
  className?: string,
  activeClass?: string,
  lightLabel?: string,
  darkLabel?: string,
  isChecked: boolean,
  toggleChecked: (event?: React.ChangeEvent<HTMLInputElement>) => any
}

export default class DarkToggle extends React.Component<Props> {
  render() {
    const { 
      id="", 
      className="", 
      activeClass="", 
      lightLabel="light", 
      darkLabel="dark", 
      isChecked, 
      toggleChecked 
    } = this.props;
    return (
      <label
        id={id}
        htmlFor="DMT_Input"
        data-light-label={lightLabel}
        data-dark-label={darkLabel}
        className={`darkModeToggle ${className} ${isChecked ? activeClass : ''}`}
      >
        <input onChange={toggleChecked} id="DMT_Input" checked={isChecked} type="checkbox" />
        <span className="switchHandle" />
      </label>
    )
  }
}
