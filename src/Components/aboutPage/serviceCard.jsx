import React from 'react'
import { Services } from '../../scripts/services'
import '../../Styles/aboutStyles/serviceCard.css'
function ServiceCard() {
  const serviceName = Services.map((data)=>{
    return(
      <div className="aboutService">
          <img src={data.img} alt={data.serviceName} className='serviceImg'/>
          <h3>{data.serviceName}</h3>
          <span className='btn btn1'>Know more</span>
      </div>
    )
  })
  return (
    <div className='serviceCard'>
      <h1>Service We Provide</h1>
      <div className="services">{serviceName}</div>
    </div>
  )
}

export default ServiceCard