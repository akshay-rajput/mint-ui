import React from 'react'
import ClassTable from './ClassTable';
import ScaleTable from './ScaleTable';

export default function Padding() {
    const classes = [
        {
            classNames: 'p0',
            description: '(padding: 0) No padding for element'
        },
        {
            classNames: 'p1, p2, p3,...., p23, p24',
            description: 'Applies padding starting from 0.25rem to 6rem respectively with each unit increasing padding value by 0.25rem'
        },
        {
            classNames: 'pl0',
            description: '(padding-left: 0) No left padding for element'
        },
        {
            classNames: 'pl1, pl2, pl3,...., pl23, pl24',
            description: 'Applies padding-left starting from 0.25rem to 6rem respectively with each unit increasing padding value by 0.25rem'
        },
        {
            classNames: 'pr0',
            description: '(padding-right: 0) No right padding for element'
        },
        {
            classNames: 'pr1, pr2, pr3,...., pr23, pr24',
            description: 'Applies padding-right starting from 0.25rem to 6rem respectively with each unit increasing padding value by 0.25rem'
        },
        {
            classNames: 'pt0',
            description: '(padding-top: 0) No top padding for element'
        },
        {
            classNames: 'pt1, pt2, pt3,...., pt23, pt24',
            description: 'Applies padding-top starting from 0.25rem to 6rem respectively with each unit increasing padding value by 0.25rem'
        },
        {
            classNames: 'pb0',
            description: '(padding-bottom: 0) No bottom padding for element'
        },
        {
            classNames: 'pb1, pb2, pb3,...., pb23, pb24',
            description: 'Applies padding-bottom starting from 0.25rem to 6rem respectively with each unit increasing padding value by 0.25rem'
        },
        
    ]

    return (
        <div className="mb8 p4 md:pl8 md:pr8">
            <div className="background-section textGray4">
                <h2 className="textXl textGray5 pb4">Padding</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    Use <strong>p</strong> class with scale number for padding on all sides. Use <strong>pl, pr, pt, pb</strong> for left, right, top and bottom padding respectively. <br/>
                    Padding utility classes use a scale from 0 to 24 where each unit stands for 0.25rem i.e. 1 = 0.25rem, 2 = 0.5rem,..., 24 = 6rem
                </p>
            </div>
            
            <div className="displayGrid md:gridCols12 gridGap4">
                <div className="gridColSpan12 md:gridColSpan8 mt7">
                    <ClassTable classes={classes}></ClassTable>
                </div>
                <div className='gridColSpan12 md:gridColSpan4'>
                    <h4 className='textSm fontSemiBold textGray4 mb2'>Scale for padding classes</h4>
                    <ScaleTable ></ScaleTable>
                </div>
            </div>
        </div>
    )
}
