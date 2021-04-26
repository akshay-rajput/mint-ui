import React from 'react';
import {v4 as uuidv4} from 'uuid';

export default function ClassTable({classes}) {
    return (
        <div className='border borderGray3 rounded shadowMdGray2' style={{overflowX: 'auto'}}>
            <div className="displayGrid gridCols12 gridGap2 bgTeal2 p2 rounded" style={{textAlign: 'left'}}>
                <span className='gridColSpan4 fontBold textGray5 textSm '>Class</span>
                <span className='gridColSpan8 fontBold textGray5 textSm '>Description</span>
            </div>
            <div className=''>
                {
                    classes.map(classData => {
                        return(
                            <div key={uuidv4()} className={'displayGrid gridCols12 gridGap4 hover:bgGreen1 pl2 pr2 pt3 pb3 textSm ' + (classes.indexOf(classData) % 2 === 0 ? 'bgGray1': '')}>
                                <span className='gridColSpan4 textGray5'>{classData.classNames}</span>
                                <span className='gridColSpan8 '>{classData.description}</span>
                            </div>
                        )
                    })
                }
            </div>
        
        </div>
    )
}
