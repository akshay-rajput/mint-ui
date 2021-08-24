import React from 'react'
import ClassTable from './ClassTable';
import ScaleTable from './ScaleTable';

export default function Margin() {
    const classes = [
        {
            classNames: 'm0',
            description: '(margin: 0) No margin for element'
        },
        {
            classNames: 'm1, m2, m3,...., m23, m24',
            description: 'Applies margin starting from 0.25rem to 6rem respectively with each unit increasing margin value by 0.25rem'
        },
        {
            classNames: 'ml0',
            description: '(margin-left: 0) No left margin for element'
        },
        {
            classNames: 'ml1, ml2, ml3,...., ml23, ml24',
            description: 'Applies margin-left starting from 0.25rem to 6rem respectively with each unit increasing margin value by 0.25rem'
        },
        {
            classNames: 'mr0',
            description: '(margin-right: 0) No right margin for element'
        },
        {
            classNames: 'mr1, mr2, mr3,...., mr23, mr24',
            description: 'Applies margin-right starting from 0.25rem to 6rem respectively with each unit increasing margin value by 0.25rem'
        },
        {
            classNames: 'mt0',
            description: '(margin-top: 0) No top margin for element'
        },
        {
            classNames: 'mt1, mt2, mt3,...., mt23, mt24',
            description: 'Applies margin-top starting from 0.25rem to 6rem respectively with each unit increasing margin value by 0.25rem'
        },
        {
            classNames: 'mb0',
            description: '(margin-bottom: 0) No bottom margin for element'
        },
        {
            classNames: 'mb1, mb2, mb3,...., mb23, mb24',
            description: 'Applies margin-bottom starting from 0.25rem to 6rem respectively with each unit increasing margin value by 0.25rem'
        },
        
    ]

    return (
        <div className="mb8 p4 md:pl8 md:pr8">
            <div className="background-section textGray4">
                <h2 className="textXl textGray5 mb4">Margin</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    Use <strong>m</strong> class with scale number for margin on all sides. Use <strong>ml, mr, mt, mb</strong> for left, right, top and bottom margin respectively. <br/>
                    Margin utility classes use a scale from 0 to 24 where each unit stands for 0.25rem i.e. 1 = 0.25rem, 2 = 0.5rem,..., 24 = 6rem
                </p>
            </div>
            
            <div className="displayGrid md:gridCols12 gridGap4">
                <div className="gridColSpan12 md:gridColSpan8 mt7">
                    <ClassTable classes={classes}></ClassTable>
                </div>
                <div className='gridColSpan12 md:gridColSpan4'>
                    <h4 className='textSm fontSemiBold textGray4 mb2'>Scale for margin classes</h4>
                    <ScaleTable ></ScaleTable>
                </div>
            </div>
        </div>
    )
}
