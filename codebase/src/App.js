import './App.css';
import ContactInformation from './pages/ContactInformation';
import ResumeAttachment from './pages/ResumeAttachment';
import Experiences from './pages/Experiences';
import { useState } from 'react';

function App() {
  const [savedContactInformation, setSavedContactInformation] = useState({});
  const [savedExperiences, setSavedExperiences] = useState({});

  function handleSaveAll() {
    console.log(savedContactInformation);
  }

  return (
    <div>
      {<ContactInformation setSavedContactInformation={setSavedContactInformation}/>}
      {<Experiences setSavedExperiences={setSavedExperiences}/>}
      {<ResumeAttachment />}
      <div className="flex justify-center">
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          onClick={() => handleSaveAll()}>Save</button>
      </div>
    </div>
  );
}

export default App;