import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ContactInformation from './pages/ContactInformation';
import ResumeAttachment from './pages/ResumeAttachment';

function App() {
  return (
    <Tabs>
      <TabPanel>
        {<ContactInformation />}
      </TabPanel>
      <TabPanel>
        {<ResumeAttachment />}
      </TabPanel>
      <TabList className="flex justify-center m-4">
        <Tab className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">1</Tab>
        <Tab className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</Tab>
      </TabList>
    </Tabs>
  );
}

export default App;