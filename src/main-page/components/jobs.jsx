import {JobStructure} from "./job-structure";

export const Jobs = () => {
    const jobs = [
        {
            title: "Software Developer Intern",
            company: "Nerds.sh",
            location: "Sibiu",
            time_period: "July 2022 - September 2022",
            description: "•\tDuring my internship, I was responsible for contributing to a project utilizing the core principles of React. \n" +
                "•\tI implemented reusable components to enhance performance and structure of the application, incorporating design patterns, Redux, and hook integration.\n" +
                "•\tI utilized Dapp-core for authentication to the application via QR code and redirection to the Maiar/Elrond Web Wallet.\n" +
                "•\tTo enhance the user experience, I created a responsive user interface incorporating Bootstrap, SASS, and CSS to meet the project's design specifications. \n" +
                "•\tThe communication with the backend was facilitated through the integration of GraphQL/Apollo Server. \n" +
                "•\tTo ensure ease of deployment, I implemented a Dockerfile and for version control Jenkins and GIT.\n"
        },
        {
            title: "Engineering IT Intern",
            company: "Continental",
            location: "Sibiu",
            time_period: "October 2021 - July 2022",
            description: "• During my tenure, I was responsible for developing and delivering relevant briefs, technical specifications, and documentation to end-users. This initiative resulted in a reduction of up to 60 hours of work per month and provided an efficient method for imparting useful technical information to end-users, improving their experience with hardware devices, PCs, and laptops.\n" +
                "• Additionally, I ensured the maintenance of existing products and devices for over 4000 employees \n" +
                "• I am highly proficient in System Programming for macOS and Windows.\n"
        }
    ]
    return(
        <div className={"job-mapping"}>
            {jobs.map((job, index) => (
                <JobStructure key={index} job={job} />
            ))}
        </div>
    )
}