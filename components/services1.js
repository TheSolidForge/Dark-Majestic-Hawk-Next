import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard4 from './feature-card4'

const Services1 = (props) => {
  return (
    <>
      <div className={`services1-container ${props.rootClassName} `}>
        <div className="services1-features">
          <h1 className="services1-text">
            <span>Discover our</span>
            <br></br>
            <span>unique features</span>
          </h1>
          <div className="services1-separator"></div>
          <div className="services1-container1">
            <div className="services1-container2">
              <FeatureCard4 rootClassName="rootClassName1"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName4"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName3"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName2"></FeatureCard4>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="services1-image"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .services1-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services1-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .services1-text {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .services1-separator {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-500);
          }
          .services1-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .services1-container2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .services1-image {
            width: 450px;
            height: 450px;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
            object-position: left;
          }
          @media (max-width: 991px) {
            .services1-features {
              align-items: center;
            }
            .services1-container1 {
              flex-direction: column;
            }
            .services1-image {
              width: 300px;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .services1-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .services1-text {
              text-align: center;
            }
            .services1-container1 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .services1-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .services1-container2 {
              grid-template-columns: 1fr;
            }
            .services1-image {
              width: 250px;
              height: 250px;
            }
          }
        `}
      </style>
    </>
  )
}

Services1.defaultProps = {
  rootClassName: '',
}

Services1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Services1
