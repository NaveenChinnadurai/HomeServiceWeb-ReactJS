import React from 'react'
import {Services} from '../Services';

function ServiceDisplay(props){
  const {id,name,txt,img}=props.data;
  return (
    <div>{img}</div>
  )
}

export default ServiceDisplay