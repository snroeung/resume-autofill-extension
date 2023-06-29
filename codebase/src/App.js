import './App.css';
import ContactInformation from './pages/ContactInformation';
import ResumeAttachment from './pages/ResumeAttachment';
import Experiences from './pages/Experiences';
import { useState } from 'react';
import { getChromeStorage } from './chrome';

function App() {
  const [savedContactInformation, setSavedContactInformation] = useState();
  const [savedExperiences, setSavedExperiences] = useState({});
  //const [savedResume, setSavedResume] = useState();

  function handleSaveAll() {
    getChromeStorage()
    .then((storage) => {
      storage.sync.set({ "contactInfo": savedContactInformation, "experiences": savedExperiences }, () => {
        console.log('Data saved successfully.');
      });
      storage.sync.get(["experiences", "contactInfo"], (result) => {
        console.log("Result retrieved: ", result);
      });
    })  
  }

  return (
    <div>
      {<ContactInformation setSavedContactInformation={setSavedContactInformation}/>}
      {<Experiences setSavedExperiences={setSavedExperiences}/>}
      {/* TODO: Will implement resume saving and autofilling later */}
      {/* {<ResumeAttachment setSavedResume={setSavedResume}/>} */}
      <div className="flex justify-center">
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          onClick={() => handleSaveAll()}>Save</button>
      </div>
    </div>
  );
}

export default App;