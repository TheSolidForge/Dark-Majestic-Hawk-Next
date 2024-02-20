import React from 'react'

import PropTypes from 'prop-types'

const SmallSpacer = (props) => {
  return (
    <>
      <div className={`small-spacer-container ${props.rootClassName} `}></div>
      <style jsx>
        {`
          .small-spacer-container {
            width: 100%;
            height: var(--dl-size-size-small);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }

          .small-spacer-root-class-name3 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
        `}
      </style>
    </>
  )
}

SmallSpacer.defaultProps = {
  rootClassName: '',
}

SmallSpacer.propTypes = {
  rootClassName: PropTypes.string,
}

export default SmallSpacer
