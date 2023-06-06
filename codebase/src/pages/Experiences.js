import { useState } from "react";
import ExperienceComponent from "../components/ExperienceComponent";

function Experiences() {
    const [experiences, setExperiences] = useState([
        {
            jobTitle: "",
            company: "",
            startDate: "",
            endDate: "",
            isCurrentPosition: false,
            description: ""
        }
    ]);

    function addExperience() {
        setExperiences(experiences => [
            ...experiences,
            {
                jobTitle: "",
                company: "",
                startDate: "",
                endDate: "",
                isCurrentPosition: false,
                description: ""
            }
        ]);
    };

    function removeExperience(index) {
        setExperiences(experiences => {
            const updatedExperiences = experiences.filter((_, experienceIndex) => experienceIndex !== index);
            return updatedExperiences;
        });
    };

    function updateExperience(index, updatedExperience) {
        setExperiences(experiences => {
            const updatedExperiences = [...experiences];
            updatedExperiences[index] = updatedExperience;
            return updatedExperiences;
        });
    };

    return (
        <div className="App">
            <header>
                <h2>
                    Experience
                </h2>
                <button onClick={() => addExperience()}>Add an experience</button>
            </header>
            {experiences.map((experience, index) => (
                <>
                <ExperienceComponent 
                    key={`experience${index + 1}`}
                    experience={experience}
                    updateExperience={(updatedExperience) => updateExperience(index, updatedExperience)}
                    onDelete={() => removeExperience(index)}
                />
                <br/>
                </>
            ))}
        </div>
    );
}

export default Experiences