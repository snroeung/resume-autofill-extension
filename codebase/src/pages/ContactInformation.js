import { useEffect, useState } from "react";
import { stateList, countryList, educationLevelList, collegeMajorList, universityList } from "../arrayConstants"
import { getChromeStorage } from "../chrome";

async function getContactInformationFromStorage() {
    return new Promise((resolve, reject) => {
      getChromeStorage()
        .then((storage) => {
          storage.sync.get(["contactInfo"], (result) => {
            const dataResult = result.contactInfo?.contactInformation;
            resolve(dataResult);
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

function ContactInformation({ setSavedContactInformation }) {
    const [storedContactInformation, setStoredContactInformation] = useState(null);
    const [contactInformation, setContactInformation] = useState(() => {
        return {
            firstName: storedContactInformation?.firstName ?? "",
            lastName: storedContactInformation?.lastName ?? "",
            emailAddress: storedContactInformation?.emailAddress ?? "",
            phoneNumber: storedContactInformation?.phoneNumber ?? "",
            addressLine1: storedContactInformation?.addressLine1 ?? "",
            addressLine2: storedContactInformation?.addressLine2 ?? "",
            city: storedContactInformation?.city ?? "",
            state: storedContactInformation?.state ?? "Alabama",
            country: storedContactInformation?.country ?? "United States",
            university: storedContactInformation?.university ?? "",
            educationLevel: storedContactInformation?.educationLevel ?? "",
            major: storedContactInformation?.major ?? "",
            gpa: storedContactInformation?.gpa ?? 0.00,
            websiteUrl: storedContactInformation?.websiteUrl ?? "",
            linkedinUrl: storedContactInformation?.linkedinUrl ?? "",
            githubUrl: storedContactInformation?.githubUrl ?? ""
        };
    });

    // set storedContactInformation by getting data from chrome storage
    useEffect(() => {
        getContactInformationFromStorage().then((data) => {
            setStoredContactInformation(data);
        });
    }, []);

    // set the contact information based on the stored information from chrome storage 
    useEffect(() => {
        if (storedContactInformation) {
          setContactInformation(storedContactInformation);
        }
      }, [storedContactInformation]);

    const selectStateNames = stateList.map((state) =>
        <option>{state}</option>
    );

    const selectCountryNames = countryList.map((country) =>
        <option>{country}</option>
    );

    const selectEducationLevels = educationLevelList.map((educationLevel) =>
        <option>{educationLevel}</option>
    );

    const selectMajors = collegeMajorList.map((major) =>
    <option>{major}</option>
    );

    const selectUniversities = universityList.map((university) =>
    <option>{university}</option>
    );

    function handleContactInformationChange(id, event) {
        setContactInformation((information) => ({
            ...information,
            [id]: event.target.value
        }));
    }

    useEffect(() => {
        setSavedContactInformation({ contactInformation })
    }, [setSavedContactInformation, contactInformation]);

    return (
        <div className="py-12 text-center">
            <header>
                <h2 className="text-2xl font-bold">
                    Contact Information
                </h2>
            </header>
            <form>
                <div className="flex flex-row justify-around my-2">
                    <label>
                        <span className="text-gray-700">First name</span>
                        <input type="text"
                            value={contactInformation.firstName}
                            onChange={(event) => handleContactInformationChange("firstName", event)}
                            className="
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
                        <input type="text"
                            value={contactInformation.lastName}
                            onChange={(event) => handleContactInformationChange("lastName", event)}
                            className="
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
                        <input type="email"
                            value={contactInformation.emailAddress}
                            onChange={(event) => handleContactInformationChange("emailAddress", event)}
                            className="
                    mt-1
                    block
                    mx-12
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="john@example.com" />
                    </label>
                    <label className="flex flex-col justify-center">
                        <span className="text-gray-700">Phone number</span>
                        <input type="tel"
                            value={contactInformation.phoneNumber}
                            onChange={(event) => handleContactInformationChange("phoneNumber", event)}
                            className="
                    mt-1
                    block
                    mx-12
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="123-456-6789" />
                    </label>
                    <label className="flex flex-col justify-center">
                        <span className="text-gray-700">Address Line 1</span>
                        <input type="text"
                            value={contactInformation.addressLine1}
                            onChange={(event) => handleContactInformationChange("addressLine1", event)}
                            className="
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
                        <input type="text"
                            value={contactInformation.addressLine2}
                            onChange={(event) => handleContactInformationChange("addressLine2", event)}
                            className="
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
                        <input type="text"
                            value={contactInformation.city}
                            onChange={(event) => handleContactInformationChange("city", event)}
                            className="
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
                        <select
                            value={contactInformation.state}
                            onChange={(event) => handleContactInformationChange("state", event)}
                            className="
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
                        <select
                            value={contactInformation.country}
                            onChange={(event) => handleContactInformationChange("country", event)}
                            className="
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
                        <select 
                            value={contactInformation.university}
                            onChange={(event) => handleContactInformationChange("university", event)}
                            className="
                    mt-1
                    block
                    mx-12
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
                        {selectUniversities}
                    </select>
                    </label>
                    <label className="flex flex-col justify-center">
                        <span className="text-gray-700">Education Level</span>
                        <select 
                            value={contactInformation.educationLevel}
                            onChange={(event) => handleContactInformationChange("educationLevel", event)}
                            className="
                    mt-1
                    block
                    mx-12
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
                        {selectEducationLevels}
                    </select>
                    </label>
                    <label className="flex flex-col justify-center">
                        <span className="text-gray-700">Major</span>
                        <select 
                            value={contactInformation.major}
                            onChange={(event) => handleContactInformationChange("major", event)}
                            className="
                    mt-1
                    block
                    mx-12
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" >
                        {selectMajors}
                        </select>
                    </label>
                    <label className="flex flex-col justify-center">
                        <span className="text-gray-700">GPA</span>
                        <input type="url"
                            value={contactInformation.gpa}
                            onChange={(event) => handleContactInformationChange("gpa", event)}
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
                <div className="flex flex-col mt-12 my-2">
                    <label className="flex flex-col justify-center">
                        <span className="text-gray-700">Website</span>
                        <input type="url"
                            value={contactInformation.websiteUrl}
                            onChange={(event) => handleContactInformationChange("websiteUrl", event)}
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
                        <span className="text-gray-700">Linkedin</span>
                        <input type="text"
                            value={contactInformation.linkedinUrl}
                            onChange={(event) => handleContactInformationChange("linkedinUrl", event)}
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
                        <span className="text-gray-700">Github</span>
                        <input type="url"
                            value={contactInformation.githubUrl}
                            onChange={(event) => handleContactInformationChange("githubUrl", event)}
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
            </form>
        </div>
    );
}

export default ContactInformation