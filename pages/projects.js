import React from 'react'
import Head from 'next/head'

import NavbarInteractive from '../components/navbar-interactive'
import SmallSpacer from '../components/small-spacer'
import GalleryCard3 from '../components/gallery-card3'
import Footer from '../components/footer'

const Projects = (props) => {
  return (
    <>
      <div className="projects-container">
        <Head>
          <title>Projects - Dark Majestic Hawk</title>
          <meta property="og:title" content="Projects - Dark Majestic Hawk" />
        </Head>
        <div className="projects-header">
          <NavbarInteractive rootClassName="navbar-interactive-root-class-name2"></NavbarInteractive>
        </div>
        <SmallSpacer rootClassName="small-spacer-root-class-name5"></SmallSpacer>
        <span className="projects-text">Please Log-In</span>
        <SmallSpacer rootClassName="small-spacer-root-class-name6"></SmallSpacer>
        <div className="projects-banner">
          <div className="projects-banner1">
            <h1 className="projects-banner-heading heading2">
              Showcasing Innovation in Advanced Manufacturing
            </h1>
            <span className="projects-banner-sub-heading">
              Discover expertise in 3D Printing, 3D Scanning, Computational
              Geometry, and High Precision Inspection
            </span>
            <button className="projects-banner-button button">
              Showcase -&gt;
            </button>
          </div>
        </div>
        <div className="projects-gallery">
          <div className="projects-gallery1">
            <h1 className="projects-gallery-heading heading2">Gallery</h1>
            <span className="projects-gallery-sub-heading">
              Explore our work and expertise
            </span>
            <div className="projects-container01">
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1650611250959-1e823abf6841?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1640904422940-f3070d65ae29?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName1"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1630926906914-f98970d8894c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName3"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1632292220916-e9c34dd75db2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName2"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName4"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1650984186744-ade500904ff7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName5"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1648457147590-ef7dbec3cfc2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName6"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1640997261734-f68eb03f9377?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName7"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1697707903242-dc15a6b56d45?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName8"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1663612864491-671a0672cc72?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName9"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1678986718987-76f0b9357e0f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName10"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1664363243687-8d68b7d54283?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName11"
              ></GalleryCard3>
            </div>
          </div>
        </div>
        <div className="projects-pricing">
          <div className="projects-pricing1">
            <div className="projects-container02">
              <span className="projects-text01 sectionTitle">
                <span>Pricing</span>
                <br></br>
              </span>
              <h2 className="projects-pricing-heading heading2">
                Choose the Right Plan for Your Company
              </h2>
              <span className="projects-pricing-sub-heading">
                Select from our flexible pricing options to meet your specific
                needs
              </span>
            </div>
            <div className="projects-container03">
              <div className="projects-pricing-card">
                <div className="projects-container04">
                  <span className="projects-text04 heading3">Free</span>
                  <span className="projects-free-plan-description">
                    A basic plan for personal use
                  </span>
                </div>
                <div className="projects-container05">
                  <span className="projects-text05">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="projects-free-plan-price">0</span>
                </div>
                <div className="projects-container06">
                  <div className="projects-container07">
                    <span className="projects-text08">✔</span>
                    <span className="projects-free-plan-features">
                      Access to website builder
                    </span>
                  </div>
                  <div className="projects-container08">
                    <span className="projects-text09">✔</span>
                    <span className="projects-free-plan-features1">
                      Limited storage space
                    </span>
                  </div>
                  <div className="projects-container09">
                    <span className="projects-text10">✔</span>
                    <span className="projects-free-plan-features2">
                      Basic customer support
                    </span>
                  </div>
                  <div className="projects-container10">
                    <span className="projects-text11">✔</span>
                    <span className="projects-free-plan-features3">
                      Free Plan Feature
                    </span>
                  </div>
                </div>
                <button className="projects-button button">
                  Continue with Free
                </button>
              </div>
              <div className="projects-pricing-card1">
                <div className="projects-container11">
                  <span className="projects-text12 heading3">BASIC</span>
                  <span className="projects-basic-plan-description">
                    An affordable plan for small businesses
                  </span>
                </div>
                <div className="projects-container12">
                  <span className="projects-text13">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="projects-basic-plan-pricing">10</span>
                  <span className="projects-text16">/ month</span>
                </div>
                <div className="projects-container13">
                  <div className="projects-container14">
                    <span className="projects-text17">✔</span>
                    <span className="projects-text18">
                      All features of FREE plan
                    </span>
                  </div>
                  <div className="projects-container15">
                    <span className="projects-text19">✔</span>
                    <span className="projects-basic-plan-features">
                      Access to website builder
                    </span>
                  </div>
                  <div className="projects-container16">
                    <span className="projects-text20">✔</span>
                    <span className="projects-basic-plan-features1">
                      Increased storage space
                    </span>
                  </div>
                  <div className="projects-container17">
                    <span className="projects-text21">✔</span>
                    <span className="projects-basic-plan-features2">
                      Priority customer support
                    </span>
                  </div>
                  <div className="projects-container18">
                    <span className="projects-text22">✔</span>
                    <span className="projects-basic-plan-features3">
                      Basic Plan Feature
                    </span>
                  </div>
                </div>
                <button className="projects-button1 button">
                  Try the Basic plan
                </button>
              </div>
              <div className="projects-pricing-card2">
                <div className="projects-container19">
                  <span className="projects-text23 heading3">
                    <span>PRO</span>
                    <br></br>
                  </span>
                  <span className="projects-pro-plan-description">
                    An advanced plan for professional companies
                  </span>
                </div>
                <div className="projects-container20">
                  <span className="projects-text26">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="projects-pro-plan-pricing">25</span>
                  <span className="projects-text29">/ month</span>
                </div>
                <div className="projects-container21">
                  <div className="projects-container22">
                    <span className="projects-text30">✔</span>
                    <span className="projects-text31">
                       All features of BASIC plan
                    </span>
                  </div>
                  <div className="projects-container23">
                    <span className="projects-text32">✔</span>
                    <span className="projects-pro-plan-features">
                      Access to website builder
                    </span>
                  </div>
                  <div className="projects-container24">
                    <span className="projects-text33">✔</span>
                    <span className="projects-pro-plan-features1">
                      Unlimited storage space
                    </span>
                  </div>
                  <div className="projects-container25">
                    <span className="projects-text34">✔</span>
                    <span className="projects-pro-plan-features2">
                      Dedicated customer support
                    </span>
                  </div>
                </div>
                <button className="projects-button2 button">
                  Try the PRO plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .projects-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .projects-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .projects-text {
            font-size: 32px;
            align-self: center;
            text-align: center;
            font-weight: 700;
          }
          .projects-banner {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .projects-banner1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-maxwidth);
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .projects-banner-heading {
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .projects-banner-sub-heading {
            color: var(--dl-color-gray-white);
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            line-height: 1.6;
          }
          .projects-banner-button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1.5rem;
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .projects-banner-button:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .projects-gallery {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            align-items: center;
            justify-content: center;
          }
          .projects-gallery1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .projects-gallery-heading {
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .projects-gallery-sub-heading {
            color: rgb(153, 153, 153);
            text-align: center;
            line-height: 1.6;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .projects-container01 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .projects-pricing {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            align-items: center;
            justify-content: center;
          }
          .projects-pricing1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .projects-container02 {
            gap: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .projects-text01 {
            color: var(--dl-color-primary1-blue80);
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .projects-pricing-heading {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .projects-pricing-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .projects-container03 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
          }
          .projects-pricing-card {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-primary1-blue60);
          }
          .projects-container04 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .projects-text04 {
            font-family: 'Raleway';
            font-weight: bold;
            text-transform: uppercase;
          }
          .projects-free-plan-description {
            line-height: 1.6;
          }
          .projects-container05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .projects-text05 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .projects-free-plan-price {
            font-size: 4rem;
            font-weight: 700;
          }
          .projects-container06 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .projects-container07 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .projects-text08 {
            color: var(--dl-color-gray-800);
          }
          .projects-free-plan-features {
            color: var(--dl-color-gray-800);
          }
          .projects-container08 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .projects-text09 {
            color: var(--dl-color-gray-800);
          }
          .projects-free-plan-features1 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .projects-container09 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .projects-text10 {
            color: var(--dl-color-gray-800);
          }
          .projects-free-plan-features2 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .projects-container10 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .projects-text11 {
            color: var(--dl-color-gray-800);
          }
          .projects-free-plan-features3 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .projects-button {
            color: var(--dl-color-gray-black);
            width: 100%;
            margin-top: auto;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1rem;
            border-color: var(--dl-color-primary1-blue100);
            border-radius: 45px;
            padding-bottom: 1rem;
            background-color: transparent;
          }
          .projects-button:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(217, 217, 217, 0.1);
          }
          .projects-pricing-card1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: 450px;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: var(--dl-color-primary1-blue60);
          }
          .projects-container11 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .projects-text12 {
            font-family: 'Raleway';
            font-weight: bold;
            text-transform: uppercase;
          }
          .projects-basic-plan-description {
            line-height: 1.6;
          }
          .projects-container12 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .projects-text13 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .projects-basic-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .projects-text16 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .projects-container13 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .projects-container14 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .projects-text17 {
            color: var(--dl-color-gray-800);
          }
          .projects-text18 {
            color: var(--dl-color-gray-800);
          }
          .projects-container15 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .projects-text19 {
            color: var(--dl-color-gray-800);
          }
          .projects-basic-plan-features {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .projects-container16 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .projects-text20 {
            color: var(--dl-color-gray-800);
          }
          .projects-basic-plan-features1 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .projects-container17 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .projects-text21 {
            color: var(--dl-color-gray-800);
          }
          .projects-basic-plan-features2 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .projects-container18 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .projects-text22 {
            color: var(--dl-color-gray-800);
          }
          .projects-basic-plan-features3 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .projects-button1 {
            color: var(--dl-color-gray-white);
            width: 100%;
            margin-top: auto;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1rem;
            border-color: rgba(41, 20, 119, 0.9);
            border-width: 0px;
            border-radius: 45px;
            padding-bottom: 1rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .projects-button1:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .projects-pricing-card2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-primary1-blue60);
          }
          .projects-container19 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .projects-text23 {
            font-family: 'Raleway';
            font-weight: bold;
            text-transform: uppercase;
          }
          .projects-pro-plan-description {
            line-height: 1.6;
          }
          .projects-container20 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .projects-text26 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .projects-pro-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .projects-text29 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .projects-container21 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .projects-container22 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .projects-text30 {
            color: var(--dl-color-gray-800);
          }
          .projects-text31 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .projects-container23 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .projects-text32 {
            color: var(--dl-color-gray-800);
          }
          .projects-pro-plan-features {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .projects-container24 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .projects-text33 {
            color: var(--dl-color-gray-800);
          }
          .projects-pro-plan-features1 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .projects-container25 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .projects-text34 {
            color: var(--dl-color-gray-800);
          }
          .projects-pro-plan-features2 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .projects-button2 {
            color: var(--dl-color-gray-white);
            width: 100%;
            margin-top: auto;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1rem;
            border-color: #3d6e70ff;
            border-width: 0px;
            border-radius: 45px;
            padding-bottom: 1rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .projects-button2:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          @media (max-width: 991px) {
            .projects-banner-sub-heading {
              max-width: 100%;
            }
            .projects-gallery-sub-heading {
              text-align: center;
            }
            .projects-container01 {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .projects-pricing-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .projects-container03 {
              align-items: center;
              flex-direction: column;
            }
            .projects-pricing-card {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 450px;
            }
            .projects-pricing-card1 {
              width: 100%;
              max-width: 450px;
            }
            .projects-pricing-card2 {
              width: 100%;
              max-width: 450px;
            }
          }
          @media (max-width: 767px) {
            .projects-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .projects-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .projects-gallery1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .projects-gallery-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .projects-container01 {
              grid-template-columns: 1fr 1fr;
            }
            .projects-pricing1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .projects-pricing-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .projects-container03 {
              align-items: center;
              flex-direction: column;
            }
            .projects-pricing-card {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .projects-pricing-card1 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .projects-pricing-card2 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .projects-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .projects-gallery1 {
              padding: var(--dl-space-space-unit);
            }
            .projects-container01 {
              grid-template-columns: 1fr;
            }
            .projects-pricing-card2 {
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Projects
