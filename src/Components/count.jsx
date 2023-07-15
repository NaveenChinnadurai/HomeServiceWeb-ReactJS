import React from 'react'
import '../Styles/homeStyles/count.css'
function count() {
  return (
    <div className="count">
            <div className="sub-count">
                <span className="counts">800+</span>
                <span className="count-word">Services</span>
            </div>
            <div className="sub-count">
                <span className="counts">15 Years</span>
                <span className="count-word">Of Experience</span>
            </div>
            <div className="sub-count">
                <span className="counts">400+</span>
                <span className="count-word">Workers</span>
            </div>
            <div className="sub-count">
                <span className="counts">20+</span>
                <span className="count-word">Branches</span>
            </div>
        </div>
  )
}

export default count;