import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ContactInformation from './pages/ContactInformation';
import ResumeAttachment from './pages/ResumeAttachment';
import Experiences from './pages/Experiences';
import { useState } from 'react';

function App() {
  const [savedContactInformation, setSavedContactInformation] = useState({});
  const [savedExperiences, setSavedExperiences] = useState({});

  function handleSaveAll() {
    //this will change once backend is configured
    console.log("Contact Information:", savedContactInformation);
    console.log("Experiences: ", savedExperiences);
  }

  return (
    <Tabs>
      <TabPanel>
        {<ContactInformation setSavedContactInformation={setSavedContactInformation}/>}
      </TabPanel>
      <TabPanel>
        {<ResumeAttachment />}
      </TabPanel>
      <TabPanel>
        {<Experiences setSavedExperiences={setSavedExperiences}/>}
      </TabPanel>
      <TabList className="flex justify-center m-4">
        <Tab className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">1</Tab>
        <Tab className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</Tab>
        <Tab className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">3</Tab>
      </TabList>
      <div className="flex justify-center my-2">
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          onClick={() => handleSaveAll()}>Save</button>
      </div>
    </Tabs>
  );
}

export default App;