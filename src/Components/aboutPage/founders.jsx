import React from 'react'
import '../../Styles/aboutStyles/founders.css'
import {founderDetails} from '../../scripts/founders'
function Founders() {
  const founder=founderDetails.map((data)=>{
    return (
      <div className="founder">
        <img src={data.img} alt={data.founderName} className='founderImg'/>
        <h3>{data.founderName}</h3>
        <span>{data.position}</span>
      </div>
    )
  })
  return (
    <div className='founderInfo'>
      <h1>Founder and Afficials</h1>
      <div className="foundersDetails">{founder}</div>
      </div>
  )
}

export default Founders