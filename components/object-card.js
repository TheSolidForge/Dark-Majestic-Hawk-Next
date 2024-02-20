import React from 'react'

import PropTypes from 'prop-types'

const ObjectCard = (props) => {
  return (
    <>
      <div className="object-card-pricing-card">
        <div className="object-card-container">
          <span className="object-card-text">
            <span>$</span>
            <span></span>
          </span>
          <span className="object-card-free-plan-price">
            {props.freePlanPrice}
          </span>
        </div>
        <div className="object-card-container1">
          <span className="object-card-text3 heading3">{props.text}</span>
          <span className="object-card-free-plan-description">
            {props.freePlanDescription}
          </span>
        </div>
        <div className="object-card-container2">
          <div className="object-card-container3">
            <span className="object-card-text4">{props.text1}</span>
            <span className="object-card-free-plan-features">
              {props.freePlanFeatures}
            </span>
          </div>
          <div className="object-card-container4">
            <span className="object-card-text5">{props.text2}</span>
            <span className="object-card-free-plan-features1">
              {props.freePlanFeatures1}
            </span>
          </div>
          <div className="object-card-container5">
            <span className="object-card-text6">{props.text3}</span>
            <span className="object-card-free-plan-features2">
              {props.freePlanFeatures2}
            </span>
          </div>
          <div className="object-card-container6">
            <span className="object-card-text7">{props.text4}</span>
            <span className="object-card-free-plan-features3">
              {props.freePlanFeatures3}
            </span>
          </div>
        </div>
        <button className="object-card-button button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .object-card-pricing-card {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: 100%;
            align-self: center;
            min-height: auto;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: var(--dl-color-primary1-blue60);
          }
          .object-card-container {
            width: 145px;
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .object-card-text {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .object-card-free-plan-price {
            font-size: 4rem;
            font-weight: 700;
          }
          .object-card-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .object-card-text3 {
            font-family: 'Raleway';
            font-weight: bold;
            text-transform: uppercase;
          }
          .object-card-free-plan-description {
            line-height: 1.6;
          }
          .object-card-container2 {
            width: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .object-card-container3 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .object-card-text4 {
            color: var(--dl-color-gray-800);
          }
          .object-card-free-plan-features {
            color: var(--dl-color-gray-800);
          }
          .object-card-container4 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .object-card-text5 {
            color: var(--dl-color-gray-800);
          }
          .object-card-free-plan-features1 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .object-card-container5 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .object-card-text6 {
            color: var(--dl-color-gray-800);
          }
          .object-card-free-plan-features2 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .object-card-container6 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .object-card-text7 {
            color: var(--dl-color-gray-800);
          }
          .object-card-free-plan-features3 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .object-card-button {
            color: var(--dl-color-gray-black);
            right: 70px;
            width: 212px;
            bottom: 0px;
            margin: var(--dl-space-space-unit);
            padding: var(--dl-space-space-unit);
            position: absolute;
            align-self: stretch;
            transition: 0.3s;
            font-weight: 700;
            border-color: var(--dl-color-primary1-blue100);
            border-radius: 45px;
            background-color: transparent;
          }
          .object-card-button:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(217, 217, 217, 0.1);
          }
          @media (max-width: 991px) {
            .object-card-pricing-card {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 450px;
            }
          }
          @media (max-width: 767px) {
            .object-card-pricing-card {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

ObjectCard.defaultProps = {
  freePlanFeatures1: 'Limited storage space',
  text2: '✔',
  text4: '✔',
  freePlanFeatures: 'Access to website builder',
  freePlanDescription: 'A basic plan for personal use',
  button: 'Continue with Free',
  freePlanPrice: '0',
  text3: '✔',
  text1: '✔',
  freePlanFeatures3: 'Free Plan Feature',
  text: 'Free',
  freePlanFeatures2: 'Basic customer support',
}

ObjectCard.propTypes = {
  freePlanFeatures1: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  freePlanFeatures: PropTypes.string,
  freePlanDescription: PropTypes.string,
  button: PropTypes.string,
  freePlanPrice: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  freePlanFeatures3: PropTypes.string,
  text: PropTypes.string,
  freePlanFeatures2: PropTypes.string,
}

export default ObjectCard
