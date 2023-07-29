import React from 'react'
import '../../Styles/aboutStyles/keyPoints.css'
import {keypoint} from '../../scripts/kPoints'
import workerImg from '../../assets/worker.png'
function KeyPoints() {
    const displayKey=keypoint.map((data)=>{
        return (
            <div className='para1' key={data.id}>
                <h3>{data.heading}</h3>
                <p>{data.para}</p>
            </div>
        )
    })
  return (
    <div className="keypoint">
        <h1>When You Choose Us You Can Expect</h1>
        <div className="keypoints">
            <div className="mainKey">{displayKey}</div>
            <div className="img">
                <img src={workerImg} alt="keyNavigation" className='workerImg'/>
            </div>
        </div>
    </div>
  )
}

export default KeyPoints