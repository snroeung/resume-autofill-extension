import { useState } from "react";

function Experience() {
    const [isCurrentPosition, setIsCurrentPosition] = useState({
        experience1: false,
        experience2: false,
        experience3: false
    });

    function handleCurrentPositionChange(experienceId) {
        setIsCurrentPosition((experiences) => ({
            ...experiences,
            [experienceId]: !experiences[experienceId]
        }));
    };

    return (
        <div className="App">
            <header>
                <h2>
                    Experience
                </h2>
            </header>
            <form>
                <div>
                    <div className="flex flex-col my-2">
                        <label className="flex flex-col justify-center">
                            <span className="text-gray-700">Job title</span>
                            <input type="text" className="
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
                            <input type="text" className="
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
                            <input type="date" className="
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
                            <input type="date" disabled={isCurrentPosition.experience1} className="
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
                                checked={isCurrentPosition.experience1}
                                onChange={() => handleCurrentPositionChange("experience1")}
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
                            <textarea class="
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
                </div>
            </form>
        </div>
    );
}

export default Experience