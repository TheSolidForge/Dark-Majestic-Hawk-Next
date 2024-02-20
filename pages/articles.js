import React from 'react'
import Head from 'next/head'

import NavbarInteractive from '../components/navbar-interactive'
import SmallSpacer from '../components/small-spacer'
import FeatureCard from '../components/feature-card'
import Footer from '../components/footer'

const Articles = (props) => {
  return (
    <>
      <div className="articles-container">
        <Head>
          <title>Articles - Dark Majestic Hawk</title>
          <meta property="og:title" content="Articles - Dark Majestic Hawk" />
        </Head>
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name1"></NavbarInteractive>
        <div className="articles-hero">
          <div className="articles-hero1">
            <SmallSpacer rootClassName="small-spacer-root-class-name2"></SmallSpacer>
            <div className="articles-container1">
              <h1 className="articles-hero-heading heading1">
                <span className="articles-text"> Published Content</span>
                <br></br>
              </h1>
              <span className="articles-hero-sub-heading">
                Advanced Manufacturing, 3D Printing, and More
              </span>
              <div className="articles-btn-group">
                <a
                  href="#Dynamic Reference Geometry"
                  className="articles-hero-button1 button"
                >
                  Get Started
                </a>
              </div>
            </div>
            <SmallSpacer rootClassName="small-spacer-root-class-name1"></SmallSpacer>
            <div className="articles-details">
              <div className="articles-details1">
                <div className="articles-container2">
                  <span className="articles-text02 sectionTitle">
                    <span>Details</span>
                    <br></br>
                  </span>
                  <h2 className="articles-details-heading heading2">
                    Unleash Your Potential with Cutting-Edge Technology
                  </h2>
                  <span className="articles-details-sub-heading">
                    Please find shared articles, papers, research projects, and
                    general knowledge that I&apos;ve complied over my career.
                    With all evidenced based learnings, new developments and
                    discoveries can contradict past findings. Reach out directly
                    to Chris@TheSolidForge about any content 
                  </span>
                </div>
                <img
                  alt="image"
                  src="/Images/pink%20buckwheat1-400h.png"
                  className="articles-details-image"
                />
              </div>
            </div>
            <SmallSpacer rootClassName="small-spacer-root-class-name"></SmallSpacer>
            <div className="articles-features">
              <div className="articles-features-container">
                <div className="articles-features1">
                  <div className="articles-container3">
                    <span className="articles-text05 sectionTitle">
                      <span>features</span>
                      <br></br>
                    </span>
                    <h2 className="articles-features-heading heading2">
                      Enhance Your Capabilities
                    </h2>
                    <span className="articles-features-sub-heading">
                      Discover the advanced features that will elevate your
                      personal company&apos;s website and business potential.
                    </span>
                  </div>
                  <div className="articles-container4">
                    <FeatureCard
                      heading="Advanced Manufacturing"
                      subHeading="Utilize cutting-edge technology for efficient and precise production processes."
                    ></FeatureCard>
                    <FeatureCard
                      heading="3D Printing"
                      subHeading="Create complex and customized objects with additive manufacturing techniques."
                    ></FeatureCard>
                    <FeatureCard
                      heading="3D Scanning"
                      subHeading="Capture detailed digital representations of physical objects for various applications."
                    ></FeatureCard>
                    <FeatureCard
                      heading="Computational Geometry"
                      subHeading="Leverage mathematical algorithms to solve geometric problems in design and manufacturing."
                    ></FeatureCard>
                  </div>
                  <article
                    id="Dynamic Reference Geometry"
                    className="articles-feature-card"
                  >
                    <svg viewBox="0 0 1024 1024" className="articles-icon">
                      <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                    </svg>
                    <div className="articles-container5">
                      <h3 className="articles-text08 heading3">
                        Dynamic Reference Geometry Tech Demo
                      </h3>
                      <span className="articles-text09">
                        <span>
                          Reference Geometry is a standard across all CAD, CAM
                          or other digital engineering software. Typically
                          reference geometry has been used by these tools as
                          static global position based references. There are
                          cases when it is more useful to have the reference
                          geometry more, or be able to toggle between
                          independent coordinate systems. Here is a technical
                          demo of some dynamic reference geometry:
                        </span>
                        <br></br>
                      </span>
                      <video
                        src="/Video/drg.mp4"
                        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                        preload="auto"
                        controls="true"
                        className="articles-video"
                      ></video>
                    </div>
                  </article>
                  <article
                    id="SF AI Guidelines"
                    className="articles-feature-card1"
                  >
                    <svg viewBox="0 0 1024 1024" className="articles-icon2">
                      <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                    </svg>
                    <div className="articles-container6">
                      <h3 className="articles-text12 heading3">
                        SOLIDFORGE&apos;s Guidelines for engaging with Large
                        Language AI Models 
                      </h3>
                      <span className="articles-text13">
                        <span>
                          AI is not well defined by general knowledge. This
                          guidance applies to the new wave of large language
                          models that have been advertised to the general public
                          in recent years. Their influence on Product teams and
                          their products at large. These guidelines should give
                          you some basis for creating your own approach on
                          interacting with technology: 
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          1.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="articles-text18">
                          Use AI as a tool.
                        </span>
                        <span> </span>
                        <br></br>
                        <span>
                          Conceptually AI models utilize historical data to give
                          you a response to a prompt. It would be reasonable to
                          trust their output can optimally provide a methods for
                          doing well established functions or actions. 
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          2.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="articles-text25">
                          AI can be entertainment, but it should only be
                          entertainment.
                        </span>
                        <span> </span>
                        <br></br>
                        <span>
                          Naturally technology can be tool for efficiently
                          optimizing social engagement. Historical
                          implementations of this idea have created countless
                          issues and side effects that we as a society are still
                          navigating. If you think what you are doing is on a
                          slippery slope you probably are. Trust your discretion
                          on how to move forward with this in mind. 
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          3.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="articles-text32">
                          There is no replacement for Expertise. 
                        </span>
                        <br></br>
                        <span>
                          A free agent or decision maker will always be required
                          to filter and check any AI output. The same way a
                          google search will need to be filtered through. The
                          end goal, good or service that an AI provides is human
                          or user and they will be the ultimate judge of the
                          quality of your product. 
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          4.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="articles-text38">
                          The Problem, Product, or Idea  does not need AI.
                        </span>
                        <span> </span>
                        <br></br>
                        <span>
                          As a cool tool it does a lot of cool things. If you
                          are attempting to create something truly new, novel 
                          or inventive sourcing this idea from mostly stollen
                          content from the internet at large. Fundamentally this
                          work needs to be done by you. AI can be a tool to
                          execute that vision but AI cannot give you the
                          vision. 
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          At the end of the day, as with almost every industry
                          or piece of technology humans have invented, someone
                          is trying to sell you something so they can make
                          money. That doesn&apos;t make what they are selling
                          any less useful, be aware of the ulterior motive. 
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Waiting for specific guidance from any person or
                          organization will likely not come. Treat AI as another
                          modern technology that has existed for years - because
                          it has. 
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Oil Robber Barron&apos;s, Media Moguls; we already
                          have the colloquial term AI Overlords. We can choose
                          to make that a reality or not together. 
                        </span>
                        <br></br>
                        <br></br>
                        <span>- SOLIDFORGE</span>
                        <br></br>
                      </span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="articles-footer">
          <Footer rootClassName="footer-root-class-name2"></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .articles-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .articles-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: -50px;
            padding-right: -50px;
            flex-direction: column;
            padding-bottom: -50px;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/Images/ucsd%20bridge1-1500w.png');
          }
          .articles-hero1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .articles-container1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .articles-hero-heading {
            color: var(--dl-color-gray-white);
            max-width: 800px;
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .articles-hero-sub-heading {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .articles-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .articles-hero-button1 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-primary1-blue100);
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: #000000;
          }
          .articles-hero-button1:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .articles-details {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #d9d9d9;
          }
          .articles-details1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .articles-container2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .articles-text02 {
            color: var(--dl-color-primary1-blue80);
            text-align: left;
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .articles-details-heading {
            width: 80%;
            text-align: left;
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .articles-details-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .articles-details-image {
            width: 400px;
            height: 400px;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
          }
          .articles-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .articles-features-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-secondary-grey400);
          }
          .articles-features1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
          }
          .articles-container3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .articles-text05 {
            color: var(--dl-color-primary1-blue80);
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .articles-features-heading {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .articles-features-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .articles-container4 {
            width: 100%;
            display: none;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .articles-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .articles-icon {
            fill: var(--dl-color-primary1-blue80);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .articles-container5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .articles-text08 {
            font-family: 'Raleway';
            font-weight: 600;
            line-height: 28px;
          }
          .articles-text09 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .articles-video {
            width: 500px;
            height: auto;
            align-self: center;
          }
          .articles-feature-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .articles-icon2 {
            fill: var(--dl-color-primary1-blue80);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .articles-container6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .articles-text12 {
            font-family: 'Raleway';
            font-weight: 600;
            line-height: 28px;
          }
          .articles-text13 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .articles-text18 {
            font-weight: 700;
          }
          .articles-text25 {
            font-weight: 700;
          }
          .articles-text32 {
            font-weight: 700;
          }
          .articles-text38 {
            font-weight: 700;
          }
          .articles-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          @media (max-width: 991px) {
            .articles-hero1 {
              flex-direction: column;
            }
            .articles-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .articles-hero-heading {
              text-align: center;
            }
            .articles-text {
              text-align: center;
            }
            .articles-hero-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .articles-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .articles-features-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .articles-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .articles-hero-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .articles-details1 {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .articles-container2 {
              align-items: center;
              justify-content: flex-start;
            }
            .articles-text02 {
              text-align: center;
            }
            .articles-details-heading {
              text-align: center;
            }
            .articles-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .articles-details-image {
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
            }
            .articles-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .articles-features-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .articles-container4 {
              grid-template-columns: 1fr;
            }
            .articles-feature-card {
              flex-direction: row;
            }
            .articles-container5 {
              flex-direction: column;
            }
            .articles-feature-card1 {
              flex-direction: row;
            }
            .articles-container6 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .articles-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .articles-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .articles-btn-group {
              flex-direction: column;
            }
            .articles-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .articles-container5 {
              flex-direction: column;
            }
            .articles-container6 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Articles
