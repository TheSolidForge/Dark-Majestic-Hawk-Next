import React from 'react'

import PropTypes from 'prop-types'

const LogInComponent = (props) => {
  return (
    <>
      <div className={`log-in-component-container ${props.rootClassName} `}>
        <h1 className="log-in-component-text">{props.text}</h1>
        <div className="log-in-component-container1">
          <input
            type="text"
            placeholder={props.textinputplaceholder}
            className="log-in-component-textinput input"
          />
          <input
            type="text"
            placeholder={props.textinputplaceholder1}
            className="log-in-component-textinput1 input"
          />
        </div>
        <button type="button" className="log-in-component-button button">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .log-in-component-container {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .log-in-component-text {
            padding: var(--dl-space-space-twounits);
          }
          .log-in-component-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .log-in-component-textinput {
            margin: var(--dl-space-space-unit);
          }
          .log-in-component-textinput1 {
            margin: var(--dl-space-space-unit);
          }
          .log-in-component-button {
            margin: var(--dl-space-space-twounits);
          }
        `}
      </style>
    </>
  )
}

LogInComponent.defaultProps = {
  textinputplaceholder: 'placeholder',
  button: 'Button',
  textinputplaceholder1: 'placeholder',
  rootClassName: '',
  text: 'Log In',
}

LogInComponent.propTypes = {
  textinputplaceholder: PropTypes.string,
  button: PropTypes.string,
  textinputplaceholder1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default LogInComponent
