import React from 'react'
import Head from 'next/head'

import NavbarInteractive from '../components/navbar-interactive'
import SmallSpacer from '../components/small-spacer'
import Footer from '../components/footer'

const Account = (props) => {
  return (
    <>
      <div className="account-container">
        <Head>
          <title>Account - Dark Majestic Hawk</title>
          <meta property="og:title" content="Account - Dark Majestic Hawk" />
        </Head>
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name5"></NavbarInteractive>
        <div className="account-container1">
          <div className="account-container2">
            <SmallSpacer rootClassName="small-spacer-root-class-name7"></SmallSpacer>
            <img
              alt="image"
              src="/Brand/web%20landing%20logo.svg"
              className="account-image"
            />
          </div>
          <div className="account-container3">
            <SmallSpacer rootClassName="small-spacer-root-class-name9"></SmallSpacer>
            <img
              alt="image"
              src="/Brand/gimp-%20solidforge%20business%20card%20back-200h.jpg"
              className="account-image1"
            />
          </div>
        </div>
        <SmallSpacer rootClassName="small-spacer-root-class-name8"></SmallSpacer>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .account-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .account-container1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
          }
          .account-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .account-image {
            width: 200px;
            object-fit: cover;
          }
          .account-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .account-image1 {
            width: 200px;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

export default Account
