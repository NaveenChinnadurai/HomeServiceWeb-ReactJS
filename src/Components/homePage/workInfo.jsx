import React from 'react';
import { workDetails } from '../../scripts/workinfo';
import '../../Styles/homeStyles/workInfo.css';
function WorkInfo() {
    const workFunction=workDetails.map((data)=>{
        return(
            <div class="work-card">
                <span class="work-card-heading">{data.head}</span>
                <span class="work-card-content">{data.para}</span>
            </div>
        )
    })
  return (
    <div class="work">
        <div class="work-div-1">
            <span class="work-heading">How We Work</span>
        </div>
        <div class="work-div-2">{workFunction}</div>
    </div>
  )
}

export default WorkInfo