import {CollegesStructure} from "./colleges-structure";

export const Colleges = () => {
    const colleges = [
        {
            title: "Information Technology",
            school:"University Lucian Blaga of Sibiu",
            location: "Sibiu",
            time_period: "October 2019 - July 2023"
        },
        {
            title: "Natural Sciences",
            school:"Octavian Goga HighSchool Sibiu",
            location: "Sibiu",
            time_period: "September 2015 - June 2019"
        }
    ]
    return(
        <div className={"education-mapping"}>
            {colleges.map((college, index) => (
                <CollegesStructure key={index} college={college} />
            ))}
        </div>
    )
}