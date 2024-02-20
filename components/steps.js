import React from 'react'

const Steps = (props) => {
  return (
    <>
      <div className="steps-container"></div>
      <style jsx>
        {`
          .steps-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Steps
