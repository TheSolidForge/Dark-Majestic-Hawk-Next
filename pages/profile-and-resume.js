import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavbarInteractive from '../components/navbar-interactive'
import SmallSpacer from '../components/small-spacer'
import Footer from '../components/footer'

const ProfileAndResume = (props) => {
  return (
    <>
      <div className="profile-and-resume-container">
        <Head>
          <title>Profile Resume and Experience</title>
          <meta
            name="description"
            content="North Carolina State University NC State 3D Systems SmileDirectClub KBS Services Kellermeyer Bergensons Services Nordson Asymtech Geomagic Polyworks stratasys"
          />
          <meta property="og:title" content="Profile Resume and Experience" />
          <meta
            property="og:description"
            content="North Carolina State University NC State 3D Systems SmileDirectClub KBS Services Kellermeyer Bergensons Services Nordson Asymtech Geomagic Polyworks stratasys"
          />
        </Head>
        <div className="profile-and-resume-header">
          <NavbarInteractive rootClassName="navbar-interactive-root-class-name3"></NavbarInteractive>
        </div>
        <div className="profile-and-resume-experience">
          <div className="profile-and-resume-pricing">
            <div className="profile-and-resume-container01">
              <h2 className="profile-and-resume-pricing-heading heading2">
                The intersection of Curiosity and Reality
              </h2>
              <span className="profile-and-resume-pricing-sub-heading">
                Topics outlined contain non-exhaustive descriptions. For more
                information and details contact me.
              </span>
            </div>
            <div className="profile-and-resume-container02">
              <div className="profile-and-resume-nc-state-experience">
                <img
                  alt="image"
                  src="/Stock/ncstate-campus-1911-building-1400w.jpg"
                  className="profile-and-resume-image"
                />
                <div className="profile-and-resume-feature-card">
                  <img
                    alt="image"
                    src="/Stock/nc%20state%20logo-1500w.png"
                    className="profile-and-resume-image1"
                  />
                  <div className="profile-and-resume-container03">
                    <h3 className="profile-and-resume-text heading3">
                      Formal Education
                    </h3>
                    <span className="profile-and-resume-text001">
                      <span>
                        I graduated from North Carolina State University, also
                        known as NC State, in 2013 with a Bachelors in Physics
                        and a Minor in Applied Mathematics
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        My senior projects, labs and papers focused on Chaos
                        Theory and Computational Modeling and Analysis of closed
                        and open inorganic systems of naturally occurring
                        chaotic behavior. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Additional areas of interest was applying these studies
                        on extreme low temperature physics utilizing statistical
                        mechanics and the Law of Large Numbers. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>Projects include: </span>
                      <br></br>
                      <span>
                        - Utilization of clean room and cascade amplified vision
                        equipment studying Volumetric Brownian motion of
                        suspended particles in viscus solutions
                      </span>
                      <br></br>
                      <span>
                        - Study and analytical modeling of spontaneous Muon
                        detection
                      </span>
                      <br></br>
                      <span>
                        - Semiconductor specific Bifurcation analysis of
                        resonance frequencies in capacitors dependent of
                        frequency
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-and-resume-banner">
          <div className="profile-and-resume-profesional-background">
            <h1 className="profile-and-resume-banner-heading heading2">
              Background and Experience
            </h1>
            <span className="profile-and-resume-banner-sub-heading">
              <span>
                Expertise is hard to come by, even harder is recognizing it.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Outlined on this page are previous projects, job descriptions,
                and research content. 
              </span>
            </span>
            <Link href="/services">
              <a className="profile-and-resume-link button">
                Future Opportunities -&gt;
              </a>
            </Link>
            <div className="profile-and-resume-feature-card1">
              <img
                alt="image"
                src="/Brand/gimp-%20solidforge%20business%20card%20back-1400w.jpg"
                className="profile-and-resume-image2"
              />
              <div className="profile-and-resume-container04">
                <h3 className="profile-and-resume-text023 heading3">
                  Professional Experience 
                </h3>
                <span className="profile-and-resume-text024">
                  <span>
                    Turbomachinery design and manufacturing, 3D Scanning
                    Computer Aided Engineering, Direct Metal, prototype and
                    production plastic Additive Manufacturing, Application, SaaS
                    and enterprise software operations and implementation
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-and-resume-blog">
          <div className="profile-and-resume-container05">
            <div className="profile-and-resume-blog-post-card">
              <img
                alt="image"
                src="/Brand/gimp-%20solidforge%20business%20card%20back-1400w.jpg"
                className="profile-and-resume-image3"
              />
              <div className="profile-and-resume-container06">
                <span className="profile-and-resume-text027">
                  SOLIDFORGE LLC
                </span>
                <h1 className="profile-and-resume-text028">
                  Solving advanced problems with Experience
                </h1>
                <div className="profile-and-resume-container07">
                  <span className="profile-and-resume-text029">
                    <span>
                      Advanced Manufacturing focused software solutions
                      consulting
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="profile-and-resume-text031"></br>
                    <br></br>
                    <span>
                      Researching advanced manufacturing methods and solutions
                    </span>
                    <br className="profile-and-resume-text034"></br>
                    <br></br>
                    <br></br>
                  </span>
                  <span className="profile-and-resume-text037">Read More</span>
                </div>
                <span className="profile-and-resume-text038">
                  Established 2023
                </span>
              </div>
            </div>
          </div>
          <div className="profile-and-resume-container08">
            <div className="profile-and-resume-blog-post-card1">
              <img
                alt="image"
                src="/3rd Part Company Logos/nordson%20logo-1400w.jpg"
                className="profile-and-resume-image4"
              />
              <div className="profile-and-resume-container09">
                <span className="profile-and-resume-text039">
                  Nordson Asymtech, Nordson Pacific Inc 
                </span>
                <h1 className="profile-and-resume-text040">
                  Real Time Machine Control and Product Ownership
                </h1>
                <div className="profile-and-resume-container10">
                  <span className="profile-and-resume-text041">
                    <span>
                      Developed and lead software development strategies to
                      reduce release cycle time by 25% and increased team
                      velocity 75% leading to 2x features per release every 4-6
                      months
                    </span>
                    <br className="profile-and-resume-text043"></br>
                    <br></br>
                    <span>
                      Represent Software Development as a stakeholder in
                      interdisciplinary product development
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="profile-and-resume-text046"></br>
                    <br></br>
                    <span>
                      Oversee day to day development activities of a 5 team
                      Agile Sprint software organization
                    </span>
                    <br className="profile-and-resume-text049"></br>
                    <br></br>
                    <span>
                      Feature development for Semiconductor near-real-time
                      robotic precision fluid dispensing precision high volume
                      manufacturing solution
                    </span>
                    <br className="profile-and-resume-text052"></br>
                    <br></br>
                  </span>
                  <span className="profile-and-resume-text054">Read More</span>
                </div>
                <h3 className="profile-and-resume-text055">
                  <span>July 2022 - July 2023:</span>
                  <span className="profile-and-resume-text057">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="profile-and-resume-text058"></br>
                  <span className="profile-and-resume-text059">
                    Employment contract suspended by Layoff
                  </span>
                  <span> </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="profile-and-resume-container11">
            <div className="profile-and-resume-blog-post-card2">
              <img
                alt="image"
                src="/3rd Part Company Logos/smile%20direct%20club%20logo-1400w.png"
                className="profile-and-resume-image5"
              />
              <div className="profile-and-resume-container12">
                <span className="profile-and-resume-text061">
                  SmileDirectClub
                </span>
                <h1 className="profile-and-resume-text062">
                  International Shipping and Enterprise integrations 
                </h1>
                <div className="profile-and-resume-container13">
                  <span className="profile-and-resume-text063">
                    <span>
                      Oversee .Net microservice Cloud inventory system and
                      python service integrations team
                    </span>
                    <br className="profile-and-resume-text065"></br>
                    <br></br>
                    <span>
                      Facilitated conversations across interdisciplinary teams
                      to optimize financial, medical order and fulfillment
                      tracking across internal systems and services with volume
                      of 100s - 1000s
                    </span>
                  </span>
                  <span className="profile-and-resume-text068">Read More</span>
                </div>
                <h3 className="profile-and-resume-text069">
                  <span>Oct 2021 - Jan 2022:</span>
                  <span className="profile-and-resume-text071">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="profile-and-resume-text072"></br>
                  <span className="profile-and-resume-text073">
                    Employment contract suspended by Layoff 
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="profile-and-resume-container14">
            <div className="profile-and-resume-blog-post-card3">
              <img
                alt="image"
                src="/3rd Part Company Logos/kbs%20logo-1400w.png"
                className="profile-and-resume-image6"
              />
              <div className="profile-and-resume-container15">
                <span className="profile-and-resume-text074">
                  kellermeyer bergensons services
                </span>
                <h1 className="profile-and-resume-text075">
                  Analytic reporting of large Data and Product Management 
                </h1>
                <div className="profile-and-resume-container16">
                  <span className="profile-and-resume-text076">
                    <span>
                      Standardized KPIs and analytics of customer delivered
                      Services (Google Analytics)
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="profile-and-resume-text078"></br>
                    <br></br>
                    <span>
                      Maintain and execute order data via a vendor platform to
                      provide scheduling, service verification, invoicing and
                      payment records of 35,000+ contractor and employees
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="profile-and-resume-text081"></br>
                    <br></br>
                    <span>
                      Collaboration with Strategic AMs to aggregate and present
                      quantitative customer data
                    </span>
                    <br className="profile-and-resume-text084"></br>
                    <br></br>
                  </span>
                  <span className="profile-and-resume-text086">Read More</span>
                </div>
                <h3 className="profile-and-resume-text087">
                  <span>Mar 2022 - Oct 2023</span>
                  <br className="profile-and-resume-text089"></br>
                  <span className="profile-and-resume-text090">
                    Employment contract suspended by mutual agrement
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="profile-and-resume-container17">
            <div className="profile-and-resume-blog-post-card4">
              <img
                alt="image"
                src="/3rd Part Company Logos/3ds%20logo-1400w.png"
                className="profile-and-resume-image7"
              />
              <div className="profile-and-resume-container18">
                <span className="profile-and-resume-text091">3D Systems</span>
                <h1 className="profile-and-resume-text092">
                  Technical Development and Product Management
                </h1>
                <div className="profile-and-resume-container19">
                  <span className="profile-and-resume-text093">
                    <span>
                      Start to finish ownership of 3 independent advanced
                      manufacturing and IIOT products representing $5M of $20M
                      of software specific revenue
                    </span>
                    <br className="profile-and-resume-text095"></br>
                    <br></br>
                    <span>
                      Define marketing and sales strategy with direct and
                      indirect Go-To-Market organizations
                    </span>
                    <br className="profile-and-resume-text098"></br>
                    <br></br>
                    <span>
                      Patent development of special projects for industrial and
                      healthcare solutions
                    </span>
                    <br className="profile-and-resume-text101"></br>
                    <br></br>
                  </span>
                  <span className="profile-and-resume-text103">Read More</span>
                </div>
                <h3 className="profile-and-resume-text104">
                  <span>April 2014 - Aug 2020</span>
                  <br></br>
                  <span className="profile-and-resume-text107">
                    Employment contract suspended by Layoff 
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="profile-and-resume-container20">
            <div className="profile-and-resume-blog-post-card5">
              <img
                alt="image"
                src="/3rd Part Company Logos/turbineblades-1400w.jpg"
                className="profile-and-resume-image8"
              />
              <div className="profile-and-resume-container21">
                <span className="profile-and-resume-text108">
                  Pilot Turbine Service
                </span>
                <h1 className="profile-and-resume-text109">
                  Manufacturing Turbo Machinery
                </h1>
                <div className="profile-and-resume-container22">
                  <span className="profile-and-resume-text110">
                    Gas and Steam engines and generators provide power,
                    locomotion and technological advancements to modern society.
                    Based in North Carolina responsibilities in this position
                    cover Warehouse inventory, maintenance and design of CAD
                    files, and research and development of low flow renewable
                    energy focusing on Wind and low flow hydro-turbines
                  </span>
                  <span className="profile-and-resume-text111">Read More</span>
                </div>
                <h3 className="profile-and-resume-text112">
                  <span>
                    2010 -2014
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Concurrent College Employment </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <SmallSpacer rootClassName="small-spacer-root-class-name4"></SmallSpacer>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .profile-and-resume-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .profile-and-resume-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .profile-and-resume-experience {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .profile-and-resume-pricing {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .profile-and-resume-container01 {
            gap: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .profile-and-resume-pricing-heading {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .profile-and-resume-pricing-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .profile-and-resume-container02 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .profile-and-resume-nc-state-experience {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .profile-and-resume-image {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 483px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .profile-and-resume-feature-card {
            width: 95%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            align-self: center;
            margin-top: 300px;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .profile-and-resume-image1 {
            width: 4rem;
            height: 4rem;
            margin: var(--dl-space-space-unit);
            object-fit: cover;
          }
          .profile-and-resume-container03 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .profile-and-resume-text {
            font-family: 'Raleway';
            font-weight: 600;
            line-height: 28px;
          }
          .profile-and-resume-text001 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .profile-and-resume-banner {
            width: 100%;
            height: 724px;
            display: flex;
            margin-top: -50px;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .profile-and-resume-profesional-background {
            gap: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-maxwidth);
            height: 774px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 325px;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/Images/ucsd%20spirit%20gate-1400w.png');
          }
          .profile-and-resume-banner-heading {
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .profile-and-resume-banner-sub-heading {
            color: var(--dl-color-gray-white);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .profile-and-resume-link {
            color: var(--dl-color-gray-black);
            margin-top: var(--dl-space-space-sixunits);
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1.5rem;
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 45px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .profile-and-resume-link:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .profile-and-resume-feature-card1 {
            width: 100%;
            height: 193px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .profile-and-resume-image2 {
            width: 178px;
            height: 114px;
            margin-top: 0px;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            border-radius: 5%;
            margin-bottom: 0px;
          }
          .profile-and-resume-container04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .profile-and-resume-text023 {
            font-family: 'Raleway';
            font-weight: 600;
            line-height: 28px;
          }
          .profile-and-resume-text024 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .profile-and-resume-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .profile-and-resume-container05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .profile-and-resume-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: row;
            justify-content: center;
          }
          .profile-and-resume-image3 {
            width: 500px;
            height: 373px;
            align-self: center;
            object-fit: cover;
            border-radius: 25px;
          }
          .profile-and-resume-container06 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .profile-and-resume-text027 {
            color: var(--dl-color-gray-500);
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .profile-and-resume-text028 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .profile-and-resume-container07 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .profile-and-resume-text029 {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .profile-and-resume-text031 {
            color: var(--dl-color-gray-500);
          }
          .profile-and-resume-text034 {
            color: var(--dl-color-gray-500);
          }
          .profile-and-resume-text037 {
            color: var(--dl-color-gray-black);
            display: none;
            font-weight: 500;
          }
          .profile-and-resume-text038 {
            color: var(--dl-color-gray-500);
            font-weight: 700;
          }
          .profile-and-resume-container08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .profile-and-resume-blog-post-card1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: row;
            justify-content: center;
          }
          .profile-and-resume-image4 {
            width: 500px;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .profile-and-resume-container09 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .profile-and-resume-text039 {
            color: var(--dl-color-gray-500);
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .profile-and-resume-text040 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .profile-and-resume-container10 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .profile-and-resume-text041 {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .profile-and-resume-text043 {
            color: var(--dl-color-gray-500);
          }
          .profile-and-resume-text046 {
            color: var(--dl-color-gray-500);
          }
          .profile-and-resume-text049 {
            color: var(--dl-color-gray-500);
          }
          .profile-and-resume-text052 {
            color: var(--dl-color-gray-500);
          }
          .profile-and-resume-text054 {
            color: var(--dl-color-gray-black);
            display: none;
            font-weight: 500;
          }
          .profile-and-resume-text055 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
          }
          .profile-and-resume-text057 {
            font-weight: 700;
          }
          .profile-and-resume-text058 {
            font-weight: 700;
          }
          .profile-and-resume-text059 {
            font-weight: 700;
          }
          .profile-and-resume-container11 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .profile-and-resume-blog-post-card2 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: row;
            justify-content: center;
          }
          .profile-and-resume-image5 {
            width: 500px;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .profile-and-resume-container12 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .profile-and-resume-text061 {
            color: var(--dl-color-gray-500);
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .profile-and-resume-text062 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .profile-and-resume-container13 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .profile-and-resume-text063 {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .profile-and-resume-text065 {
            color: var(--dl-color-gray-500);
          }
          .profile-and-resume-text068 {
            color: var(--dl-color-gray-black);
            display: none;
            font-weight: 500;
          }
          .profile-and-resume-text069 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
          }
          .profile-and-resume-text071 {
            font-weight: 700;
          }
          .profile-and-resume-text072 {
            font-weight: 700;
          }
          .profile-and-resume-text073 {
            font-weight: 700;
          }
          .profile-and-resume-container14 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .profile-and-resume-blog-post-card3 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: row;
            justify-content: center;
          }
          .profile-and-resume-image6 {
            width: 500px;
            align-self: center;
            object-fit: cover;
          }
          .profile-and-resume-container15 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .profile-and-resume-text074 {
            color: var(--dl-color-gray-500);
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .profile-and-resume-text075 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .profile-and-resume-container16 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .profile-and-resume-text076 {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .profile-and-resume-text078 {
            color: var(--dl-color-gray-500);
          }
          .profile-and-resume-text081 {
            color: var(--dl-color-gray-500);
          }
          .profile-and-resume-text084 {
            color: var(--dl-color-gray-500);
          }
          .profile-and-resume-text086 {
            color: var(--dl-color-gray-black);
            display: none;
            font-weight: 500;
          }
          .profile-and-resume-text087 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
          }
          .profile-and-resume-text089 {
            font-weight: 700;
          }
          .profile-and-resume-text090 {
            font-weight: 700;
          }
          .profile-and-resume-container17 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .profile-and-resume-blog-post-card4 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: row;
            justify-content: center;
          }
          .profile-and-resume-image7 {
            width: 500px;
            padding: var(--dl-space-space-threeunits);
            align-self: center;
            object-fit: cover;
          }
          .profile-and-resume-container18 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .profile-and-resume-text091 {
            color: var(--dl-color-gray-500);
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .profile-and-resume-text092 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .profile-and-resume-container19 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .profile-and-resume-text093 {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .profile-and-resume-text095 {
            color: var(--dl-color-gray-500);
          }
          .profile-and-resume-text098 {
            color: var(--dl-color-gray-500);
          }
          .profile-and-resume-text101 {
            color: var(--dl-color-gray-500);
          }
          .profile-and-resume-text103 {
            color: var(--dl-color-gray-black);
            display: none;
            font-weight: 500;
          }
          .profile-and-resume-text104 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
          }
          .profile-and-resume-text107 {
            font-weight: 700;
          }
          .profile-and-resume-container20 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .profile-and-resume-blog-post-card5 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            flex-direction: row;
            justify-content: center;
          }
          .profile-and-resume-image8 {
            width: auto;
            height: auto;
            margin: var(--dl-space-space-unit);
            align-self: center;
            object-fit: cover;
          }
          .profile-and-resume-container21 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .profile-and-resume-text108 {
            color: var(--dl-color-gray-500);
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .profile-and-resume-text109 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .profile-and-resume-container22 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .profile-and-resume-text110 {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .profile-and-resume-text111 {
            color: var(--dl-color-gray-black);
            display: none;
            font-weight: 500;
          }
          .profile-and-resume-text112 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
          }
          @media (max-width: 991px) {
            .profile-and-resume-pricing-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .profile-and-resume-container02 {
              align-items: center;
              flex-direction: column;
            }
            .profile-and-resume-banner-sub-heading {
              max-width: 100%;
            }
            .profile-and-resume-image3 {
              width: 50%;
            }
            .profile-and-resume-image4 {
              width: 50%;
            }
            .profile-and-resume-image5 {
              width: 50%;
            }
            .profile-and-resume-image6 {
              width: 50%;
            }
            .profile-and-resume-image7 {
              width: 50%;
            }
            .profile-and-resume-image8 {
              width: 50%;
            }
          }
          @media (max-width: 767px) {
            .profile-and-resume-pricing {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .profile-and-resume-pricing-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .profile-and-resume-container02 {
              align-items: center;
              flex-direction: column;
            }
            .profile-and-resume-feature-card {
              flex-direction: row;
            }
            .profile-and-resume-container03 {
              flex-direction: column;
            }
            .profile-and-resume-profesional-background {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .profile-and-resume-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .profile-and-resume-feature-card1 {
              flex-direction: row;
            }
            .profile-and-resume-container04 {
              flex-direction: column;
            }
            .profile-and-resume-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .profile-and-resume-blog-post-card {
              flex-direction: column;
              justify-content: space-between;
            }
            .profile-and-resume-image3 {
              width: 100%;
            }
            .profile-and-resume-container06 {
              width: 100%;
            }
            .profile-and-resume-text027 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .profile-and-resume-text028 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .profile-and-resume-container07 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .profile-and-resume-blog-post-card1 {
              flex-direction: column;
              justify-content: space-between;
            }
            .profile-and-resume-image4 {
              width: 100%;
            }
            .profile-and-resume-container09 {
              width: 100%;
            }
            .profile-and-resume-text039 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .profile-and-resume-text040 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .profile-and-resume-container10 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .profile-and-resume-blog-post-card2 {
              flex-direction: column;
              justify-content: space-between;
            }
            .profile-and-resume-image5 {
              width: 100%;
            }
            .profile-and-resume-container12 {
              width: 100%;
            }
            .profile-and-resume-text061 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .profile-and-resume-text062 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .profile-and-resume-container13 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .profile-and-resume-blog-post-card3 {
              flex-direction: column;
              justify-content: space-between;
            }
            .profile-and-resume-image6 {
              width: 100%;
            }
            .profile-and-resume-container15 {
              width: 100%;
            }
            .profile-and-resume-text074 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .profile-and-resume-text075 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .profile-and-resume-container16 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .profile-and-resume-blog-post-card4 {
              flex-direction: column;
              justify-content: space-between;
            }
            .profile-and-resume-image7 {
              width: 100%;
            }
            .profile-and-resume-container18 {
              width: 100%;
            }
            .profile-and-resume-text091 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .profile-and-resume-text092 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .profile-and-resume-container19 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .profile-and-resume-blog-post-card5 {
              flex-direction: column;
              justify-content: space-between;
            }
            .profile-and-resume-image8 {
              width: 100%;
            }
            .profile-and-resume-container21 {
              width: 100%;
            }
            .profile-and-resume-text108 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .profile-and-resume-text109 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .profile-and-resume-container22 {
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .profile-and-resume-container03 {
              flex-direction: column;
            }
            .profile-and-resume-profesional-background {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .profile-and-resume-container04 {
              flex-direction: column;
            }
            .profile-and-resume-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .profile-and-resume-text037 {
              width: auto;
            }
            .profile-and-resume-text054 {
              width: auto;
            }
            .profile-and-resume-text068 {
              width: auto;
            }
            .profile-and-resume-text086 {
              width: auto;
            }
            .profile-and-resume-text103 {
              width: auto;
            }
            .profile-and-resume-text111 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default ProfileAndResume
