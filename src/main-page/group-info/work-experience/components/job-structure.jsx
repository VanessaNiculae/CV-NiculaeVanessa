import React from "react"
import "./style.css"
export const JobStructure = ({job}) => {
    return (
        <div className={"job-structure"}>
            <p className={"job-title"}>{job.title}</p>
            <p className={"job-company"}>{job.company}</p>
            <p className={"job-location"}>{job.location}</p>
            <p className={"job-timeperiod"}>{job.time_period}</p>
            {job.description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </div>
    )
}