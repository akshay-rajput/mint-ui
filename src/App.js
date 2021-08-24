// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
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

import BackgroundColors from './components/doc_classes/BackgroundColor';
import BorderColors from './components/doc_classes/BorderColor';
import Flexbox from './components/doc_classes/Flex';
import Grid from './components/doc_classes/Grid';
import FontStyle from './components/doc_classes/FontStyle';
import Margin from './components/doc_classes/Margin';
import Padding from './components/doc_classes/Padding';
import TextColor from './components/doc_classes/TextColor';
import TextSize from './components/doc_classes/TextSize';
import Height from './components/doc_classes/Height';
import Width from './components/doc_classes/Width';
import Utilities from './components/doc_classes/Utilities';


function App() {
  const [TopicList, setTopicList] = useState(appIndex)
  const [activeTopicName, setActiveTopicName] = useState('Introduction');
  const [isMobileMenuOpen, setMobileMenu] = useState(false) 

  useEffect(() => {
    if(isMobileMenuOpen){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen])

  function toggleMobileMenu(){
    setMobileMenu(prevState => !prevState);
  }
  function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
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

    // close mobile menu
    setMobileMenu(false)
  }

  return (
    <div className="App bgWhite displayFlex flexCol">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="app-main flexGrow">
        <Sidebar topicList={TopicList} isMobileMenuOpen={isMobileMenuOpen} updateTopic={changeTopicHandler}></Sidebar>

        {
            /* TopicList.map(topicData => Components[topicData.name]) */
            /* const Tag = `Comp${this.state.activeComponent}`;
              return (
                <Tag />
              }
            } */
        }
        <div className="app-content">
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

          { activeTopicName === 'Background color' && <BackgroundColors />}
          { activeTopicName === 'Border Color' && <BorderColors />}
          { activeTopicName === 'Flex' && <Flexbox />}
          { activeTopicName === 'Grid' && <Grid />}
          { activeTopicName === 'Font Style' && <FontStyle />}
          { activeTopicName === 'Margin' && <Margin />}
          { activeTopicName === 'Padding' && <Padding />}
          { activeTopicName === 'Text color' && <TextColor />}
          { activeTopicName === 'Text size' && <TextSize />}
          { activeTopicName === 'Height' && <Height />}
          { activeTopicName === 'Width' && <Width />}
          { activeTopicName === 'Utilities' && <Utilities />}          

        </div>
        
        <button onClick={toggleMobileMenu} style={{right: isMobileMenuOpen ? '1rem':''}} title="Toggle Index"
                className="app-index-toggle bgTeal4 hover:bgTeal6 hover:textWhite borderNone roundedFull p3">
          <i className={ isMobileMenuOpen ? "fas fa-times":"fas fa-bars"}></i>
        </button>
      </main>
      
      <footer className='wFull textCenter textGray4 mt18 pt2 pb2 bgGreen1'>
        made by 
        <a href="https://akshayr.netlify.app" target="_blank" rel='noopener noreferrer' className=" logofont ml2 textTeal4 underline hover:textTeal5" title="Developer's Portfolio">akshay</a>

        <button onClick={scrollToTop} className="btn-to-top borderNone textSm textTeal5 hover:textTeal4" title='Scroll to top'>
          <i className="fas fa-angle-double-up"></i> Top
        </button>
      </footer>
    </div>
  );
}

export default App;
