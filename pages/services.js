import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavbarInteractive from '../components/navbar-interactive'
import SmallSpacer from '../components/small-spacer'
import Footer from '../components/footer'

const Services = (props) => {
  return (
    <>
      <div className="services-container">
        <Head>
          <title>The SOLIDFORGE Services</title>
          <meta
            name="description"
            content="Additive Manufacturing, .Net python 3D 3DPrinting lathe CNC ruby react analytics real-time analysis 3d scan volumetric IoT IIoT"
          />
          <meta property="og:title" content="The SOLIDFORGE Services" />
          <meta
            property="og:description"
            content="Additive Manufacturing, .Net python 3D 3DPrinting lathe CNC ruby react analytics real-time analysis 3d scan volumetric IoT IIoT"
          />
        </Head>
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name4"></NavbarInteractive>
        <div className="services-container1">
          <div className="services-features">
            <h1 className="services-text">Solve Your Problem Here</h1>
            <div className="services-separator"></div>
            <SmallSpacer rootClassName="small-spacer-root-class-name3"></SmallSpacer>
            <div className="services-container2">
              <div className="services-container3">
                <div className="services-feature-card">
                  <svg viewBox="0 0 1024 1024" className="services-icon">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="services-text01">Contract Service</h2>
                  <span className="services-text02">
                    Large or small there is a solution for what you need. There
                    are times when projects need a little push or something
                    bigger. Find out how SOLIDFORGE can be the Swiss Army Knife
                    in your tool bag 
                  </span>
                </div>
                <div className="services-feature-card1">
                  <svg viewBox="0 0 1024 1024" className="services-icon2">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="services-text03">Turn Key Solutions</h2>
                  <span className="services-text04">
                    With over a decade of experience in large and small
                    companies a full solution can be provided based on the
                    specific situation you are in. 
                  </span>
                </div>
                <div className="services-feature-card2">
                  <svg viewBox="0 0 1024 1024" className="services-icon4">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="services-text05">Implementation</h2>
                  <span className="services-text06">
                    Rigorous detail oriented implementation of existing business
                    plans.
                  </span>
                </div>
                <div className="services-feature-card3">
                  <svg viewBox="0 0 1024 1024" className="services-icon6">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="services-text07">Human Focus</h2>
                  <span className="services-text08">
                    All interactions with business are interpersonal exchanges.
                    Doing business with this in mind creates an enjoyable
                    experience for everyone even when a sale is not involved.  
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-pricing">
          <div className="services-container4">
            <div className="services-container5">
              <h1>Pricing Plans</h1>
              <span className="services-text10">
                <span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  Services are offered on a freelance per hour basis or longer
                  term contract. 
                </span>
                <br></br>
                <br></br>
                <span>
                  To qualify for an Hourly agreement a 30 minute introduction
                  call is recommended. 
                </span>
                <br></br>
                <br></br>
                <span>
                  Hourly contracts are offered on a 4 or 8 hour billing schedule
                  with the minimum obligation of 8 hours. 
                </span>
                <br></br>
              </span>
            </div>
            <div className="services-container6">
              <div className="services-container7">
                <span className="services-text23">Hourly</span>
                <span className="services-text24">-</span>
                <span className="services-text25">Minimum 4 hours</span>
                <span className="services-text26">Flexible Hours</span>
                <span className="services-text27">
                  {' '}
                  Small or large Projects
                </span>
                <span className="services-text28">Rapid Tactical Work</span>
                <span className="services-text29">
                  <span>
                    On-Call
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="services-text31">and</span>
                  <span className="services-text32">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>After Hours  </span>
                </span>
                <Link href="/contact-and-about">
                  <a className="services-link button">Learn More</a>
                </Link>
              </div>
              <div className="services-container8">
                <span className="services-text34">Contract</span>
                <span className="services-text35">
                  <span>-</span>
                  <br></br>
                </span>
                <span className="services-text38">Custom Agreements</span>
                <span className="services-text39">Retainment</span>
                <span className="services-text40">On-Site Traveling</span>
                <span className="services-text41">
                  <span className="services-text42">Private projects</span>
                </span>
                <Link href="/contact-and-about">
                  <a className="services-link1 button">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .services-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .services-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-features {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
            background-size: cover;
            background-image: url('/Images/torry%20pines%20medditation-1400w.jpg');
          }
          .services-text {
            font-size: 3rem;
            align-self: flex-end;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .services-separator {
            width: 100px;
            height: 2px;
            align-self: flex-end;
            background-color: var(--dl-color-gray-500);
          }
          .services-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .services-container3 {
            width: 100%;
            height: auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .services-feature-card {
            width: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .services-icon {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text01 {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text02 {
            color: var(--dl-color-gray-700);
          }
          .services-feature-card1 {
            width: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .services-icon2 {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text03 {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text04 {
            color: var(--dl-color-gray-700);
          }
          .services-feature-card2 {
            width: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .services-icon4 {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text05 {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text06 {
            color: var(--dl-color-gray-700);
          }
          .services-feature-card3 {
            width: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .services-icon6 {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text07 {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text08 {
            color: var(--dl-color-gray-700);
          }
          .services-pricing {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .services-container4 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
          }
          .services-container5 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .services-text10 {
            color: var(--dl-color-gray-500);
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .services-container6 {
            flex: 2;
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .services-container7 {
            flex: 1;
            height: 450px;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-white);
          }
          .services-container7:hover {
            transform: scale(1.02);
          }
          .services-text23 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .services-text24 {
            margin: var(--dl-space-space-twounits);
            font-size: 4rem;
            font-weight: 200;
          }
          .services-text25 {
            font-weight: bold;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text26 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text27 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text28 {
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text29 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text31 {
            font-style: normal;
            font-weight: 400;
          }
          .services-text32 {
            font-style: normal;
            font-weight: 400;
          }
          .services-link {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .services-container8 {
            flex: 1;
            color: var(--dl-color-gray-white);
            height: 450px;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-black);
          }
          .services-container8:hover {
            transform: scale(1.02);
          }
          .services-text34 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .services-text35 {
            margin: var(--dl-space-space-twounits);
            font-size: 4rem;
            font-weight: 200;
          }
          .services-text38 {
            font-weight: bold;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text39 {
            font-weight: bold;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text40 {
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text41 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .services-text42 {
            font-weight: 700;
          }
          .services-link1 {
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .services-features {
              align-items: center;
            }
            .services-container2 {
              flex-direction: column;
            }
            .services-container4 {
              align-items: center;
              flex-direction: column;
            }
            .services-container5 {
              align-items: center;
            }
            .services-text10 {
              text-align: center;
            }
            .services-container6 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .services-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .services-text {
              text-align: center;
            }
            .services-container2 {
              flex-direction: column;
            }
            .services-container4 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .services-container6 {
              flex-direction: column;
            }
            .services-container7 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .services-container8 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .services-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .services-container3 {
              grid-template-columns: 1fr;
            }
            .services-text01 {
              font-style: normal;
              font-weight: 600;
            }
            .services-text03 {
              font-style: normal;
              font-weight: 600;
            }
            .services-text05 {
              font-style: normal;
              font-weight: 600;
            }
            .services-text07 {
              font-style: normal;
              font-weight: 600;
            }
            .services-container4 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Services
