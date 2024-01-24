import React from 'react'

const GeneralNav = ({img,middleText,lastImage,generalStyle}) => {
  return (
    <div style={generalStyle}>
        <div>{img}</div>
        <div>{middleText}</div>
        <div>{lastImage}</div>
    </div>
  )
}

export default GeneralNav