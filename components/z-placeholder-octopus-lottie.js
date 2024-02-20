import React, { useEffect } from 'react'

const ZPlaceholderOctopusLottie = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="z-placeholder-octopus-lottie-container">
        <div className="z-placeholder-octopus-lottie-div">
          <lottie-player
            src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
            speed="1"
            autoplay="true"
            background="transparent"
          ></lottie-player>
        </div>
      </div>
      <style jsx>
        {`
          .z-placeholder-octopus-lottie-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .z-placeholder-octopus-lottie-div {
            width: 300px;
            height: 300px;
          }
        `}
      </style>
    </>
  )
}

export default ZPlaceholderOctopusLottie
