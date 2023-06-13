import { useState, useEffect } from "react";
import ExperienceComponent from "../components/ExperienceComponent";

function Experiences({setSavedExperiences}) {
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

    //TODO: add function to disable the delete experience button for all experience components except the last one

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

    useEffect(() => {
        setSavedExperiences({ experiences })
    }, [setSavedExperiences, experiences]);

    return (
        <div className="py-12 text-center">
            <header>
                <h2 className="text-2xl font-bold">
                    Experience
                </h2>
            </header>
            <div className="py-2 my-2">
                <button className="px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                    onClick={() => addExperience()}>Add an experience</button>
            </div>
            {experiences.map((experience, index) => (
                <>
                    <h2>Experience {index + 1}</h2>
                    <ExperienceComponent
                        key={`experience${index + 1}`}
                        experience={experience}
                        updateExperience={(updatedExperience) => updateExperience(index, updatedExperience)}
                        onDelete={() => removeExperience(index)}
                    />
                    <br />
                </>
            ))}
        </div>
    );
}

export default Experiences