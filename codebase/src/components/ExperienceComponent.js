function ExperienceComponent({ experience, updateExperience, onDelete }) {

    function handleInputChange(id, value) {
        const updatedExperience = {
            ...experience,
            [id]: value
        };

        updateExperience(updatedExperience);
    }

    return (
        <form>
            <div>
                <div className="flex flex-col my-2">
                    <label className="flex flex-col justify-center">
                        <span className="text-gray-700">Job title</span>
                        <input type="text"
                            value={experience.jobTitle}
                            onChange={(event) => handleInputChange("jobTitle", event.target.value)}
                            className="
                    mt-1
                    block
                    mx-12
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                    </label>
                    <label className="flex flex-col justify-center">
                        <span className="text-gray-700">Company</span>
                        <input type="text"
                            value={experience.company}
                            onChange={(event) => handleInputChange("company", event.target.value)}
                            className="
                    mt-1
                    block
                    mx-12
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                    </label>
                </div>
                <div className="flex flex-row justify-around my-2">
                    <label>
                        <span className="text-gray-700">Start date</span>
                        <input type="date"
                            value={experience.startDate}
                            onChange={(event) => handleInputChange("startDate", event.target.value)}
                            className="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                    </label>
                    <label>
                        <span className="text-gray-700">End date</span>
                        <input type="date" 
                        value={experience.endDate}
                        onChange={(event) => handleInputChange("endDate", event.target.value)}
                        disabled={experience.isCurrentPosition} className="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                    </label>
                </div>
                <div>
                    <label class="inline-flex">
                        <input type="checkbox"
                            checked={experience.isCurrentPosition}
                            onChange={(event) => handleInputChange("isCurrentPosition", event.target.value)}
                            class="
                        border-gray-300 border-2
                        text-black
                        focus:border-gray-300 focus:ring-black
                    " />
                        <span class="ml-2">I currently work here</span>
                    </label>
                </div>
                <div className="flex flex-col my-2">
                    <label className="flex flex-col justify-center">
                        <span class="text-gray-700">Description</span>
                        <textarea 
                        value={experience.description}
                        onChange={(event) => handleInputChange("description", event.target.value)}
                        class="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
                " rows="3" spellcheck="false"></textarea>
                    </label>
                </div>
                <button onClick={onDelete}>Delete experience</button>
            </div>
        </form>
    );
}

export default ExperienceComponent