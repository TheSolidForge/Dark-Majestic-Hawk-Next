import React from 'react'

import PropTypes from 'prop-types'

const NetlifyAuthentication = (props) => {
  return (
    <>
      <div
        className={`netlify-authentication-container ${props.rootClassName} `}
      >
        <div data-netlify-identity-menu>
          <div
            data-netlify-identity-button
            className="netlify-authentication-netlify-button logInButton"
          >
            <button
              type="button"
              className="netlify-authentication-button logInButton button"
            >
              {props.logIn}
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .netlify-authentication-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .netlify-authentication-netlify-button {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            border-color: rgba(0, 0, 0, 0);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            justify-content: center;
          }
          .netlify-authentication-button {
            color: var(--dl-color-gray-black);
            width: 200px;
            padding: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-unit);
            font-family: 'Noto Sans';
            margin-left: var(--dl-space-space-unit);
            padding-top: 16px;
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-bottom: 16px;
            background-color: var(--dl-color-gray-white);
          }

          .netlify-authentication-root-class-name1 {
            width: auto;
            margin: var(--dl-space-space-unit);
            display: none;
          }
          @media (max-width: 1600px) {
            .netlify-authentication-netlify-button {
              padding: var(--dl-space-space-unit);
              align-items: center;
              border-width: 1px;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .netlify-authentication-netlify-button {
              padding: var(--dl-space-space-unit);
              align-items: center;
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-bottom: 16px;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

NetlifyAuthentication.defaultProps = {
  signup: 'Sign Up',
  logIn: 'Log-In or Register',
  rootClassName: '',
}

NetlifyAuthentication.propTypes = {
  signup: PropTypes.string,
  logIn: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NetlifyAuthentication
