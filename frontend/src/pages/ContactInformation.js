import { stateList, countryList } from "../array"

function ContactInformation() {
    const selectStateNames = stateList.map((state) =>
        <option>{state}</option>
    );

    const selectCountryNames = countryList.map((country) =>
        <option>{country}</option>
    );

    return (
        <div className="App">
            <header>
                <h2>
                    Contact Information
                </h2>
            </header>
            <form>
                <div className="flex flex-row justify-around my-2">
                    <label>
                        <span className="text-gray-700">First name</span>
                        <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="John" />
                    </label>
                    <label>
                        <span className="text-gray-700">Last name</span>
                        <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Appleseed" />
                    </label>
                </div>
                <div className="flex flex-col my-2">
                    <label className="flex flex-col justify-center">
                        <span className="text-gray-700">Email address</span>
                        <input type="email" className="
                    mt-1
                    block
                    mx-12
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="john@example.com" />
                    </label>
                    <label className="flex flex-col justify-center">
                        <span className="text-gray-700">Address Line 1</span>
                        <input type="text" className="
                    mt-1
                    block
                    mx-12
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="1 Main St" />
                    </label>
                </div>
                <div className="flex flex-row justify-around my-2">
                    <label className="my-2">
                        <span className="text-gray-700">Address Line 2</span>
                        <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Apt 001" />
                    </label>
                    <label className="my-2">
                        <span className="text-gray-700">City</span>
                        <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                    </label>
                </div>
                <div className="flex flex-row justify-around my-2">
                    <label>
                        <span className="text-gray-700">State</span>
                        <select className="
                    mt-1
                    mx-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
                            {selectStateNames}
                        </select>
                    </label>
                    <label>
                        <span className="text-gray-700">Country</span>
                        <select className="
                    mt-1
                    mx-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
                            {selectCountryNames}
                        </select>
                    </label>
                </div>
                <div className="flex flex-col mt-12 my-2">
                    <label className="flex flex-col justify-center">
                        <span className="text-gray-700">University</span>
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
                        <span className="text-gray-700">Degree Type</span>
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
                        <span className="text-gray-700">Major</span>
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
                <div className="flex flex-col mt-12 my-2">
                    <label className="flex flex-col justify-center">
                        <span className="text-gray-700">Website</span>
                        <input type="url" className="
                    mt-1
                    block
                    mx-12
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                    </label>
                    <label className="flex flex-col justify-center">
                        <span className="text-gray-700">Linkedin</span>
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
                        <span className="text-gray-700">Github</span>
                        <input type="url" className="
                    mt-1
                    block
                    mx-12
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                    </label>
                </div>
            </form>
        </div>
    );
}

export default ContactInformation