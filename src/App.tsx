import React, { ReactElement, useState } from 'react';
import { UseFetchDemo } from './components/UseFetchDemo';
import { Tab } from './components/Tab';

type TabsData = Record<string, ReactElement>;

const tabsData: TabsData = {
  useFetch: <UseFetchDemo/>,
};

export function App() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabsData>('useFetch');
  const handleTabClick = (tab: keyof typeof tabsData) => () => setActiveTab(tab);

  return (
    <div className='container'>
      <div className="tabs">
        {Object.keys(tabsData)
          .map((tab, index) => <Tab key={index} tabName={tab} onClick={handleTabClick(tab as keyof typeof tabsData)} />)}
      </div>
      {tabsData[activeTab]}
    </div>
  );
}
