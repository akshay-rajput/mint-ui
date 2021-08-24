import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Sidebar({topicList, isMobileMenuOpen, updateTopic}) {

    return (
        <div className={"app-sidebar p4 md:pl8 md:pr4 pb12 bgGray1 textGray5 "+ (isMobileMenuOpen?'showOnMobile' : 'hideOnMobile')}>
            <div className="">
                {  topicList.map( section => {
                    const sectionHeadings = Object.keys(section);
                    return(
                            <div className="mb4" key={uuidv4()}>
                                {
                                    sectionHeadings.map( sectionName => {
                                        
                                        return(
                                            <ul key={uuidv4()} className="">
                                                <li key={uuidv4()} style={{display: section[sectionName].length < 2 ? 'none':''}}
                                                        className="borderNone displayBlock bgTransparent textGray4 textRg  p1 mb1">
                                                    <i className={sectionName === 'Components'? 'fas fa-cube mr1': sectionName === 'Patterns' ? 'fas fa-magic mr1 textSm': sectionName === 'Classes' ? 'fas fa-cubes mr1 textSm': ''}></i>
                                                    {sectionName}
                                                </li>

                                                {
                                                    section[sectionName].map(topicName => {
                                                        /* console.log('topicName: ', topicName.name + ' -- active: ', topicName.active) */
                                                        return(
                                                            <li key={uuidv4()} onClick={() => updateTopic(sectionName, topicName)} style= {{color: topicName.active ? 'teal': '', borderLeft: topicName.active ? '3px solid teal': '',backgroundColor: topicName.active ? 'white': ''}}
                                                                    className="borderNone displayBlock bgTransparent textGray4 hover:textTeal4 hover:bgWhite textRg fontSemiBold cursorPointer p1 md:pl2 mb1">
                                                                {topicName.name}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                
            </div>         
        </div>
    )
}
