import * as React from 'react';
import { Tab } from './components/Tab';
import { UseFetchDemo } from './components/UseFetchDemo';
import { UseLocalStorageDemo } from './components/UseLocalStorageDemo';
import { UseHoverDemo } from './components/UseHoverDemo';
import { UseViewportSizeDemo } from './components/UseViewportSizeDemo';

const tabsData = {
  useFetch: <UseFetchDemo/>,
  useLocalStorage: <UseLocalStorageDemo/>,
  useHover: <UseHoverDemo/>,
  useViewportSize: <UseViewportSizeDemo/>,
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
