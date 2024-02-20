import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NetlifyAuthentication from '../components/netlify-authentication'
import NavbarInteractive from '../components/navbar-interactive'
import Footer from '../components/footer'

const TheSolidForge = (props) => {
  return (
    <>
      <div className="the-solid-forge-container">
        <Head>
          <title>The Solid Forge</title>
          <meta
            name="description"
            content="The SOLIDFORGEis a company focused on advanced manufacturing techniques, complex enterprise IT implementations, and full 3D support, computation and analysis."
          />
          <meta property="og:title" content="The Solid Forge" />
          <meta
            property="og:description"
            content="The SOLIDFORGEis a company focused on advanced manufacturing techniques, complex enterprise IT implementations, and full 3D support, computation and analysis."
          />
        </Head>
        <div className="the-solid-forge-container1">
          <span className="the-solid-forge-logo">The Solid Forge</span>
          <div className="the-solid-forge-container2">
            <NetlifyAuthentication rootClassName="netlify-authentication-root-class-name1"></NetlifyAuthentication>
            <div
              data-netlify-identity-menu
              className="the-solid-forge-netlify-container"
            >
              <div
                data-netlify-identity-button
                className="the-solid-forge-netlify-button logInButton"
              >
                <label className="the-solid-forge-text">Label</label>
                <span className="the-solid-forge-text1">Account</span>
              </div>
            </div>
            <div className="the-solid-forge-container3">
              <nav className="the-solid-forge-nav">
                <Link href="/contact-and-about">
                  <a className="the-solid-forge-link">About</a>
                </Link>
                <Link href="/services">
                  <a className="the-solid-forge-link1">Services</a>
                </Link>
                <Link href="/articles">
                  <a className="the-solid-forge-link2">Articles</a>
                </Link>
                <Link href="/projects">
                  <a className="the-solid-forge-link3">Projects</a>
                </Link>
                <Link href="/contact-and-about">
                  <a className="the-solid-forge-link4">Contact</a>
                </Link>
              </nav>
            </div>
          </div>
          <NavbarInteractive rootClassName="navbar-interactive-root-class-name6"></NavbarInteractive>
        </div>
        <img
          alt="image"
          src="/Brand/web%20landing%20logo.svg"
          className="the-solid-forge-image"
        />
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .the-solid-forge-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .the-solid-forge-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 100%;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: #000000;
          }
          .the-solid-forge-logo {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            font-weight: bold;
          }
          .the-solid-forge-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .the-solid-forge-netlify-container {
            width: var(--dl-size-size-large);
            margin: var(--dl-space-space-unit);
          }
          .the-solid-forge-netlify-button {
            flex: 0 0 auto;
            color: white;
            width: auto;
            height: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-white);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .the-solid-forge-text {
            color: var(--dl-color-gray-black);
            display: none;
          }
          .the-solid-forge-text1 {
            color: var(--dl-color-gray-black);
          }
          .the-solid-forge-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .the-solid-forge-nav {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .the-solid-forge-link {
            color: var(--dl-color-secondary-gray500);
            margin-left: 0px;
            text-decoration: none;
          }
          .the-solid-forge-link1 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .the-solid-forge-link2 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .the-solid-forge-link3 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .the-solid-forge-link4 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .the-solid-forge-image {
            width: 100%;
            padding: -8px;
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .the-solid-forge-netlify-button {
              padding: var(--dl-space-space-unit);
              align-items: center;
              border-color: var(--dl-color-secondary-gray500);
              border-width: 1px;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .the-solid-forge-netlify-button {
              padding: var(--dl-space-space-unit);
              align-items: center;
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

export default TheSolidForge
