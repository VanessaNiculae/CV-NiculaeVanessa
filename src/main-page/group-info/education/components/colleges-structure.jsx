import React from "react";

export const CollegesStructure = ({college}) => {
    return (
        <div className={"college-structure"}>
            <p className={"college-title"}>{college.title}</p>
            <p className={"college-company"}>{college.school}</p>
            <p className={"college-location"}>{college.location}</p>
            <p className={"college-timeperiod"}>{college.time_period}</p>
        </div>
    )
}