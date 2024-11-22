import * as React from 'react';
import { UseFetchDemo } from './components/UseFetchDemo';
import { Tab } from './components/Tab';
import { UseLocalStorageDemo } from './components/UseLocalStorageDemo';

const tabsData = {
  useFetch: <UseFetchDemo/>,
  useLocalStorage: <UseLocalStorageDemo/>,
};

export function App() {
  const [activeTab, setActiveTab] = React.useState('useFetch');
  const handleTabClick = (tab) => () => setActiveTab(tab);

  return (
    <div className='container'>
      <div className="tabs">
        {Object.keys(tabsData)
          .map((tab, index) => <Tab key={index} tabName={tab} onCLick={handleTabClick(tab)} />)}
      </div>
      {tabsData[activeTab]}
    </div>
  );
}
