import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-footer ${props.rootClassName} `}>
        <footer className="footer-footer1">
          <div className="footer-container">
            <span className="footer-logo">{props.logo}</span>
            <nav className="footer-nav">
              <Link href="/contact-and-about">
                <a className="footer-link">{props.nav1}</a>
              </Link>
              <Link href="/services">
                <a className="footer-link1">{props.nav2}</a>
              </Link>
              <Link href="/articles">
                <a className="footer-link2">{props.nav3}</a>
              </Link>
              <Link href="/projects">
                <a className="footer-link3">{props.nav4}</a>
              </Link>
              <Link href="/contact-and-about">
                <a className="footer-link4">{props.nav5}</a>
              </Link>
            </nav>
          </div>
          <div className="footer-separator"></div>
          <div className="footer-container1">
            <span className="footer-text">{props.text}</span>
            <div className="footer-icon-group">
              <a
                href="https://www.linkedin.com/company/solidforge-llc"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link5"
              >
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="footer-image"
                />
              </a>
              <a
                href="https://www.thesolidforge.com"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link6"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon"
                >
                  <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .footer-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .footer-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .footer-container {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-logo {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            font-weight: bold;
          }
          .footer-nav {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .footer-link {
            color: var(--dl-color-secondary-gray500);
            margin-left: 0px;
            text-decoration: none;
          }
          .footer-link1 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link2 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link3 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link4 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-800);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .footer-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-text {
            color: var(--dl-color-secondary-gray500);
          }
          .footer-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link5 {
            display: contents;
          }
          .footer-image {
            width: 30px;
            object-fit: cover;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .footer-link6 {
            display: contents;
          }
          .footer-icon {
            fill: #ffffff;
            width: 24px;
            height: auto;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .footer-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-container1 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-text {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .footer-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .footer-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-container1 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-text {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  nav3: 'Articles',
  imageAlt: 'image',
  logo: 'The Solid Forge',
  nav4: 'Projects',
  text: '© 2024 SOLIDFORGE, All Rights Reserved.',
  nav1: 'About',
  nav2: 'Services',
  imageSrc: '/3rd Part Company Logos/li-in-bug-200h.png',
  nav5: 'Contact',
  rootClassName: '',
}

Footer.propTypes = {
  nav3: PropTypes.string,
  imageAlt: PropTypes.string,
  logo: PropTypes.string,
  nav4: PropTypes.string,
  text: PropTypes.string,
  nav1: PropTypes.string,
  nav2: PropTypes.string,
  imageSrc: PropTypes.string,
  nav5: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
