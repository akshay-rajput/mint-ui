// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import appIndex from '../src/topicList'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Introduction from './components/doc_components/Introduction';
import Avatars from './components/doc_components/Avatars';
import Alerts from './components/doc_components/Alerts';
import Badges from './components/doc_components/Badges';
import Buttons from './components/doc_components/Buttons';
import Images from './components/doc_components/Images';
import Inputs from './components/doc_components/Inputs';
import Navbars from './components/doc_components/Navbars';

import Cards from './components/doc_patterns/Cards';
import Forms from './components/doc_patterns/Forms';
import HeroSections from './components/doc_patterns/HeroSections';


function App() {
  const [TopicList, setTopicList] = useState(appIndex)
  const [activeTopicName, setActiveTopicName] = useState('Introduction');
  
  function changeTopicHandler(sectionName, topicName){
    // deep Copy the Topiclist
    let copyAppIndex = JSON.parse(JSON.stringify(TopicList));

    copyAppIndex.forEach(section => {
      // check in passed section
      if(section[sectionName]){
        // console.log('active: ', section[sectionName])
        section[sectionName].forEach(TopicData => {
          if(TopicData.name === topicName.name){
            TopicData.active = true;
            setActiveTopicName(TopicData.name)
          }
          else{
            TopicData.active = false
          }
        })
      }
      else{
        // set all other topics as active:false
        for (const otherSection in section) {
          if (Object.hasOwnProperty.call(section, otherSection)) {
            const otherSectionTopics = section[otherSection];
            otherSectionTopics.forEach(TopicData => {
              TopicData.active = false;
            })      
          }
        }
      }
    })
    // console.log('Copy: ', copyAppIndex)
    setTopicList(copyAppIndex)
  }

  return (
    <div className="App bgWhite displayFlex flexCol">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="app-main flexGrow displayGrid md:gridCols12 gridGap2">
        <Sidebar topicList={TopicList}  updateTopic={changeTopicHandler}></Sidebar>

        {
            /* TopicList.map(topicData => Components[topicData.name]) */
            /* const Tag = `Comp${this.state.activeComponent}`;
              return (
                <Tag />
              }
            } */
        }
        <div className="app-content md:gridColSpan9">
          { activeTopicName === 'Introduction' && <Introduction />}
          { activeTopicName === 'Avatars' && <Avatars />}
          { activeTopicName === 'Alerts' && <Alerts />}
          { activeTopicName === 'Badges' && <Badges />}
          { activeTopicName === 'Buttons' && <Buttons />}
          { activeTopicName === 'Images' && <Images />}
          { activeTopicName === 'Inputs' && <Inputs />}
          { activeTopicName === 'Navbars' && <Navbars />}
          { activeTopicName === 'Cards' && <Cards />}
          { activeTopicName === 'Forms' && <Forms />}
          { activeTopicName === 'Hero Sections' && <HeroSections />}

        </div>
        
      </main>
    </div>
  );
}

export default App;