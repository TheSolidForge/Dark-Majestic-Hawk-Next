import React from 'react'
import Head from 'next/head'

import NavbarInteractive from '../components/navbar-interactive'
import Question from '../components/question'
import Footer from '../components/footer'

const ContactAndAbout = (props) => {
  return (
    <>
      <div className="contact-and-about-container">
        <Head>
          <title>Contact and About SOLIDFORGE</title>
          <meta
            name="description"
            content="Advanced Manufacturing consulting services Product Management Software Development"
          />
          <meta property="og:title" content="Contact and About SOLIDFORGE" />
          <meta
            property="og:description"
            content="Advanced Manufacturing consulting services Product Management Software Development"
          />
        </Head>
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name"></NavbarInteractive>
        <div className="contact-and-about-banner">
          <span className="contact-and-about-text">How to Contact:</span>
          <span className="contact-and-about-text01">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
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
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
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
          <div className="contact-and-about-container1">
            <button className="contact-and-about-button button">
              <span className="contact-and-about-text08">
                <span>Email:</span>
                <br></br>
                <span>Chris@TheSolidForge.com</span>
              </span>
            </button>
            <button className="contact-and-about-button1 button">
              <span className="contact-and-about-text12">
                <span>Phone:</span>
                <br></br>
                <span>+1 858 630 8468</span>
              </span>
            </button>
          </div>
        </div>
        <div className="contact-and-about-details">
          <div className="contact-and-about-details1">
            <div className="contact-and-about-container2">
              <h2 className="contact-and-about-details-heading heading2">
                Unleash Your Potential with Cutting-Edge Technology
              </h2>
              <span className="contact-and-about-details-sub-heading">
                Welcome to our website where we share articles, papers, research
                projects, and knowledge related to advanced manufacturing.
                Connect with us for potential business opportunities and contact
                information.
              </span>
            </div>
            <img
              alt="image"
              src="/Images/pavona%20decussatus-500w.png"
              className="contact-and-about-details-image"
            />
          </div>
        </div>
        <div className="contact-and-about-faq">
          <div className="contact-and-about-faq-container">
            <div className="contact-and-about-faq1">
              <div className="contact-and-about-container3">
                <h2 className="contact-and-about-text16 heading2">
                  Career Experience
                </h2>
                <img
                  alt="image"
                  src="/Images/orange%20calendula%20officinalis-400w.png"
                  className="contact-and-about-details-image1"
                />
              </div>
              <div className="contact-and-about-container4">
                <Question
                  answer="Solidforge is a company developed to share and capitalize of the human generated knowledge gather over a decade of interacting with succesful US Domestic and International organizations"
                  question="What is SOLIDFORGE?"
                ></Question>
                <Question
                  answer="Many projects content is professionally confidential. I am able to discuss these projects from an operational and technical perspective. Please reach out with specific questions. Common topics include: High Precision inspection with Structured Light Scanners or Coordinate Measurement Machines (CMMs) in automated production environments - Computation geometry algorithm and workflow  generation for patient specific healthcare applications concerning Dental, cosmetic and functioning fairing prosthetic, complex injection mold design, and 3D metal printed implants "
                  question="Can you provide examples of your work in advanced manufacturing?"
                ></Question>
                <Question
                  answer="Consulting Services are available on a first come first serve basis. Current contracts and projects include: - Saltwater Aquaculture for Sustainable Protein generation - Hydrogen Cell Production and Design -chemical and elemental analysis of Saltwater and Brackish Ecosystems "
                  question="Do you offer consulting services or assistance with research projects?"
                ></Question>
                <Question
                  answer="Yes, our website will serve as a platform for sharing articles and papers written by our team. Contracting services are avalible for publishing case studies of industrial and theoretical processes"
                  question="Will you be posting articles and papers on your website?"
                ></Question>
                <Question
                  answer="Contact me directly at Chris@TheSolidForge.com or +1 858 630 8468"
                  question="How can potential customers contact your company?"
                ></Question>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .contact-and-about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-and-about-banner {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&w=1500');
            background-position: center;
          }
          .contact-and-about-text {
            font-size: 0.75rem;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .contact-and-about-text01 {
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-and-about-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .contact-and-about-button {
            color: var(--dl-color-gray-white);
            width: 300px;
            height: 100px;
            font-size: 0.75rem;
            text-align: center;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .contact-and-about-button:hover {
            color: var(--dl-color-gray-black);
            background-color: transparent;
          }
          .contact-and-about-text08 {
            font-size: 1rem;
          }
          .contact-and-about-button1 {
            color: var(--dl-color-gray-white);
            width: 300px;
            height: 100px;
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .contact-and-about-button1:hover {
            color: var(--dl-color-gray-black);
            background-color: transparent;
          }
          .contact-and-about-text12 {
            font-size: 1rem;
            text-align: center;
          }
          .contact-and-about-details {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .contact-and-about-details1 {
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
          .contact-and-about-container2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-and-about-details-heading {
            width: 80%;
            text-align: left;
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .contact-and-about-details-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-and-about-details-image {
            width: 455px;
            height: 556px;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
          }
          .contact-and-about-faq {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .contact-and-about-faq-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-secondary-grey400);
          }
          .contact-and-about-faq1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .contact-and-about-container3 {
            width: 411px;
            display: flex;
            max-width: 35%;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
            background-color: #d9d9d9;
          }
          .contact-and-about-text16 {
            align-self: center;
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .contact-and-about-details-image1 {
            width: 346px;
            height: 383px;
            margin-top: var(--dl-space-space-twounits);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-and-about-container4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 642px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          @media (max-width: 991px) {
            .contact-and-about-text01 {
              width: 100%;
            }
            .contact-and-about-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .contact-and-about-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-and-about-text01 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .contact-and-about-details1 {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .contact-and-about-container2 {
              align-items: center;
              justify-content: flex-start;
            }
            .contact-and-about-details-heading {
              text-align: center;
            }
            .contact-and-about-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .contact-and-about-details-image {
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
            }
            .contact-and-about-faq1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .contact-and-about-container3 {
              max-width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .contact-and-about-details-image1 {
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .contact-and-about-banner {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .contact-and-about-container1 {
              align-items: center;
              flex-direction: column;
            }
            .contact-and-about-button {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .contact-and-about-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ContactAndAbout
