import React from 'react';
import "../Styles/WorkInfo.css";

function WorkInfo() {
  return (
    <div class="work">
        <div class="work-div-1">
            <span class="work-heading">How We Work</span>
        </div>
        <div class="work-div-2">
            <div class="work-card">
                <span class="work-card-heading">Build Plan</span>
                <span class="work-card-content"> The first step we are doing while starting a service is the planning,we plan a  proper schedule with customers before staring on the projects.We collect customer choices and also provide some suggestions.After a brief documentation is prepared,it is given to the customer for correction and evaluation.Once the customer approved the designs or process ,work will be started.</span>
            </div>
            <div class="work-card word-card-1">
                <span class="work-card-heading">Working On Models</span>
                <span class="work-card-content">After Customer Approved the Schedule or designs or service,we start to implement the work.The service is done effectively and good quality of the service is maintained.While processing the work the customer's satisfaction is considered.The services is fully based on the documentation prepared earlier. </span>
            </div>
            <div class="work-card">
                <span class="work-card-heading">Feedback and Reworking</span>
                <span class="work-card-content">Once the work is completed the customer's Feedback is collected in order to identify the effeciancy of the service.If the Customer is not satisfied with the work ,the work is reconstructed based on the customer feedback.The alteration is done wherever possible.All the Services are worked with care and love to provide a quality service.The work is reconstructed until the customer get satisfiedwith the work.</span>
            </div>
        </div>
    </div>
  )
}

export default WorkInfo