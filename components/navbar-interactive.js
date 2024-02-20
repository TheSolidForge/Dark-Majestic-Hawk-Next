import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import NetlifyAuthentication from './netlify-authentication'

const NavbarInteractive = (props) => {
  return (
    <>
      <div className={`navbar-interactive-container ${props.rootClassName} `}>
        <header
          data-thq="thq-navbar"
          className="navbar-interactive-navbar-interactive"
        >
          <div
            data-thq="thq-navbar-nav"
            className="navbar-interactive-desktop-menu"
          >
            <nav className="navbar-interactive-links">
              <Link href="/">
                <a className="navbar-interactive-link">{props.nav1}</a>
              </Link>
              <Link href="/profile-and-resume">
                <a className="navbar-interactive-link01">{props.nav12}</a>
              </Link>
              <Link href="/services">
                <a className="navbar-interactive-link02">{props.nav2}</a>
              </Link>
              <Link href="/articles">
                <a className="navbar-interactive-link03">{props.nav3}</a>
              </Link>
              <Link href="/projects">
                <a className="navbar-interactive-link04">{props.nav4}</a>
              </Link>
              <Link href="/contact-and-about">
                <a className="navbar-interactive-link05">{props.nav5}</a>
              </Link>
            </nav>
            <div className="navbar-interactive-buttons">
              <button className="navbar-interactive-login button">
                {props.login}
              </button>
              <button className="navbar-interactive-register button">
                {props.register}
              </button>
            </div>
            <NetlifyAuthentication rootClassName="netlify-authentication-root-class-name"></NetlifyAuthentication>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="navbar-interactive-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="navbar-interactive-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="navbar-interactive-mobile-menu"
          >
            <nav className="navbar-interactive-links1">
              <Link href="/">
                <a className="navbar-interactive-link06">{props.nav13}</a>
              </Link>
              <Link href="/profile-and-resume">
                <a className="navbar-interactive-link07">{props.nav121}</a>
              </Link>
              <Link href="/services">
                <a className="navbar-interactive-link08">{props.nav22}</a>
              </Link>
              <Link href="/projects">
                <a className="navbar-interactive-link09">{props.nav32}</a>
              </Link>
              <Link href="/projects">
                <a className="navbar-interactive-link10">{props.nav42}</a>
              </Link>
              <Link href="/contact-and-about">
                <a className="navbar-interactive-link11">{props.nav52}</a>
              </Link>
            </nav>
            <div className="navbar-interactive-buttons1">
              <button className="navbar-interactive-login1 logInButton button">
                {props.login2}
              </button>
              <button className="navbar-interactive-register1 logInButton button">
                {props.register2}
              </button>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-interactive-container {
            display: flex;
            position: relative;
          }
          .navbar-interactive-navbar-interactive {
            width: auto;
            display: flex;
            position: sticky;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .navbar-interactive-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-interactive-links {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .navbar-interactive-link {
            width: var(--dl-size-size-large);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-link:hover {
            color: #3d6e70ff;
          }
          .navbar-interactive-link01 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-link01:hover {
            color: #3d6e70ff;
          }
          .navbar-interactive-link02 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-link02:hover {
            color: #3d6e70ff;
          }
          .navbar-interactive-link03 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-link03:hover {
            color: #3d6e70ff;
          }
          .navbar-interactive-link04 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-link04:hover {
            color: #3d6e70ff;
          }
          .navbar-interactive-link05 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-link05:hover {
            color: #3d6e70ff;
          }
          .navbar-interactive-buttons {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-interactive-login {
            border-color: var(--dl-color-primary1-blue100);
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: 1.5rem;
            border-radius: 45px;
            padding-right: 1.5rem;
          }
          .navbar-interactive-register {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-weight: bold;
            border-color: var(--dl-color-primary1-blue100);
            padding-left: 1.5rem;
            border-radius: 45px;
            padding-right: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .navbar-interactive-register:hover {
            border-color: rgba(41, 20, 119, 0.9);
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            background-color: rgba(41, 20, 119, 0.9);
          }
          .navbar-interactive-burger-menu {
            display: none;
          }
          .navbar-interactive-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .navbar-interactive-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .navbar-interactive-links1 {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .navbar-interactive-link06 {
            width: var(--dl-size-size-large);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-link06:hover {
            color: #3d6e70ff;
          }
          .navbar-interactive-link07 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-link07:hover {
            color: #3d6e70ff;
          }
          .navbar-interactive-link08 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-link08:hover {
            color: #3d6e70ff;
          }
          .navbar-interactive-link09 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-link09:hover {
            color: #3d6e70ff;
          }
          .navbar-interactive-link10 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-link10:hover {
            color: #3d6e70ff;
          }
          .navbar-interactive-link11 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-link11:hover {
            color: #3d6e70ff;
          }
          .navbar-interactive-buttons1 {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-interactive-login1 {
            border-color: var(--dl-color-primary1-blue100);
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: 1.5rem;
            border-radius: 45px;
            padding-right: 1.5rem;
          }
          .navbar-interactive-register1 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-weight: bold;
            border-color: var(--dl-color-primary1-blue100);
            padding-left: 1.5rem;
            border-radius: 45px;
            padding-right: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .navbar-interactive-register1:hover {
            border-color: rgba(41, 20, 119, 0.9);
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            background-color: rgba(41, 20, 119, 0.9);
          }

          .navbar-interactive-root-class-name1 {
            align-self: center;
          }

          .navbar-interactive-root-class-name6 {
            margin: var(--dl-space-space-halfunit);
            display: none;
          }
          @media (max-width: 767px) {
            .navbar-interactive-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar-interactive-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .navbar-interactive-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .navbar-interactive-navbar-interactive {
              width: auto;
              padding: var(--dl-space-space-unit);
              max-width: auto;
            }
            .navbar-interactive-desktop-menu {
              display: none;
            }
            .navbar-interactive-burger-menu {
              display: flex;
            }
            .navbar-interactive-icon {
              fill: #d9d9d9;
            }
            .navbar-interactive-mobile-menu {
              flex: 1;
              width: auto;
              height: auto;
              padding: 16px;
              position: static;
            }
            .navbar-interactive-links1 {
              flex-direction: column;
            }
            .navbar-interactive-link06 {
              align-self: center;
              font-style: normal;
              margin-top: 4px;
              text-align: center;
              font-weight: 700;
              margin-bottom: 4px;
            }
            .navbar-interactive-link07 {
              margin-top: 4px;
              margin-bottom: 4px;
            }
            .navbar-interactive-link08 {
              margin-top: 4px;
              margin-bottom: 4px;
            }
            .navbar-interactive-link09 {
              margin-top: 4px;
              margin-bottom: 4px;
            }
            .navbar-interactive-link10 {
              margin-top: 4px;
              margin-bottom: 4px;
            }
            .navbar-interactive-link11 {
              margin-top: 4px;
              margin-bottom: 4px;
            }
            .navbar-interactive-buttons1 {
              display: flex;
            }
            .navbar-interactive-login1 {
              margin-left: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 2px;
            }
            .navbar-interactive-register1 {
              color: var(--dl-color-gray-black);
              font-style: normal;
              font-weight: 400;
              border-color: var(--dl-color-gray-black);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              background-color: var(--dl-color-gray-white);
            }
            .navbar-interactive-root-class-name6 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

NavbarInteractive.defaultProps = {
  nav2: 'Services',
  nav51: 'Contact',
  nav3: 'Articles',
  text: 'Text',
  login2: 'Login',
  login: 'Login',
  nav12: 'About',
  nav4: 'Projects',
  rootClassName: '',
  nav41: 'Projects',
  nav13: 'The Solid Forge',
  nav5: 'Contact',
  register2: 'Register',
  register: 'Register',
  logo: 'The SolidForge',
  login1: 'Login',
  register1: 'Register',
  nav42: 'Projects',
  nav52: 'Contact',
  logo1: 'COMPANYNAME',
  nav32: 'Articles',
  nav121: 'About',
  nav21: 'Services',
  nav1: 'The Solid Forge',
  nav22: 'Services',
  nav31: 'Articles',
  nav11: 'About',
}

NavbarInteractive.propTypes = {
  nav2: PropTypes.string,
  nav51: PropTypes.string,
  nav3: PropTypes.string,
  text: PropTypes.string,
  login2: PropTypes.string,
  login: PropTypes.string,
  nav12: PropTypes.string,
  nav4: PropTypes.string,
  rootClassName: PropTypes.string,
  nav41: PropTypes.string,
  nav13: PropTypes.string,
  nav5: PropTypes.string,
  register2: PropTypes.string,
  register: PropTypes.string,
  logo: PropTypes.string,
  login1: PropTypes.string,
  register1: PropTypes.string,
  nav42: PropTypes.string,
  nav52: PropTypes.string,
  logo1: PropTypes.string,
  nav32: PropTypes.string,
  nav121: PropTypes.string,
  nav21: PropTypes.string,
  nav1: PropTypes.string,
  nav22: PropTypes.string,
  nav31: PropTypes.string,
  nav11: PropTypes.string,
}

export default NavbarInteractive
